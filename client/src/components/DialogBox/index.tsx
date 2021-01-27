import React, { FC, useState, useEffect, useRef } from 'react'
import { Dispatch, SetStateAction, RefObject } from "react";
import cx from 'classnames'

import { IDialogContent } from '../../store/interfaces'

import styles from './styles.module.scss'

interface IProps {
    content: IDialogContent
}

type Ref = string | ((instance: HTMLElement | null) => void) | RefObject<HTMLDivElement> | null | undefined

const DialogBox: FC<IProps> = ({ content }: IProps) => {
    const [isExpanded, setExpanded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
    const ref: Ref = useRef(null)
    const height: string = isExpanded ? `${ref?.current?.scrollHeight}px` : '0px'

    useEffect(() => {
        setExpanded(true)
    }, [])

    return (
        <div ref={ref} className={cx(styles.container, { [styles.expanded]: isExpanded})} style={{ maxHeight: height }}>
            <p className={styles.userPrompt}>{content.content}</p>
        </div>
    )
}

export default DialogBox

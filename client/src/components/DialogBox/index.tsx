import * as React from 'react'
import { Dispatch, SetStateAction, RefObject } from "react";
import cx from 'classnames'

import styles from './styles.module.scss'

const DialogBox = ({ message }) => {
    const { useState, useEffect, useRef } = React
    const [isExpanded, setExpanded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
    const ref: RefObject<HTMLDivElement | null> = useRef(null)
    const height: string = isExpanded ? `${ref?.current?.scrollHeight}px` : '0px'


    useEffect(() => {
        setExpanded(true)
    }, [])


    return (
        <div ref={ref} className={cx(styles.container, { [styles.expanded]: isExpanded})} style={{ maxHeight: height }}>
            <p className={styles.userPrompt}>{message.content}</p>
        </div>
    )
}

export default DialogBox
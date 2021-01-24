import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import cx from 'classnames'

import Buttons from "../Buttons";
import DialogBox from '../DialogBox'

import styles from './styles.module.scss'

interface IProps {
    dialog: object[]
}

const SpeechBox: FC<IProps> = ({ dialog }: IProps) => {
    const [isExpanded, setExpanded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)

    return (
        <div className={cx(styles.container, { [styles.isExpanded]: isExpanded})} onClick={() => setExpanded(true)}>
            <div className={cx(styles.buttonsContainer, { [styles.isExpanded]: isExpanded})}>
                <Buttons isRecording={false} />
            </div>
            {dialog.map((message: object, index: number) => {
                return (
                    <div className={styles.dialogContainer}>
                        <DialogBox message={message} key={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default SpeechBox

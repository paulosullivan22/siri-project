import React, { FC } from 'react'

import DialogBox from '../DialogBox'

import styles from './styles.module.scss'

interface IProps {
    dialog: object[]
}

const SpeechBox: FC<IProps> = ({ dialog }: IProps) => {
    return (
        <div className={styles.container}>
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
import * as React from 'react'

import DialogBox from '../DialogBox'

import styles from './styles.module.scss'

const SpeechBox: any = ({ dialog }) => {
    return (
        <div className={styles.container}>
            {dialog.map((message, index) => {
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
import * as React from 'react'

import DialogBox from '../DialogBox'

import styles from './styles.module.scss'

const SpeechBox: any = ({ dialog }) => {
    return (
        <div className={styles.container}>
            {dialog.map(message => {
                return (
                    <DialogBox message={message} />
                )
            })}
        </div>
    )
}

export default SpeechBox
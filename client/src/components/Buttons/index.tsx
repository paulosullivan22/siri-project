import React, { FC } from 'react'

import recordIcon from './assets/voice-record.jpeg'

import styles from './styles.module.scss'

const Buttons: FC = () => {
    return (
        <div className={styles.container}>
            <button>
                <img src={recordIcon} alt="record-icon" />
            </button>
        </div>
    )
}

export default Buttons
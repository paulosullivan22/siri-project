import cx from 'classnames'
import React, { FC } from 'react'

import styles from './styles.module.scss'

interface IProps {
    isRecording: boolean
}

const Buttons: FC<IProps> = ({ isRecording }: IProps) => {
    return (
        <div className={styles.container}>
            <button className={cx('record', styles.record)}>
                <div className={cx(styles.innerRecord, { [styles.isRecording]: isRecording })} />
            </button>
            <button className={cx('stop', styles.stopRecord)}>
                <div className={styles.innerStopRecord} />
            </button>
        </div>
    )
}

export default Buttons

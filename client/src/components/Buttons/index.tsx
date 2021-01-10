import React, { FC } from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

const Buttons: FC = () => {
    return (
        <div className={styles.container}>
            <button className={cx('record', styles.record)}>
                <div className={styles.innerRecord} />
            </button>
            <button className={cx('stop', styles.stopRecord)}>
                <div className={styles.innerStopRecord} />
            </button>
        </div>
    )
}

export default Buttons
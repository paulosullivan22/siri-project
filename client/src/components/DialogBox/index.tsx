import * as React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

const DialogBox = ({ message }) => {
    const { useState, useEffect, useRef } = React
    const [isExpanded, setExpanded] = useState(false)
    const ref: any = useRef(null)
    const height = isExpanded ? `${ref?.current?.scrollHeight}px` : '0px'


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
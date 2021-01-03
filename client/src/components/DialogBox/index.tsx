import * as React from 'react'

import styles from './styles.module.scss'

const DialogBox = ({ message }) => {
    return (
        <div>
            {message.content}
        </div>
    )
}

export default DialogBox
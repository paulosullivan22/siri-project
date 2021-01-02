import * as React from 'react'
import { connect } from "react-redux"

import styles from './styles.module.scss'

const SpeechBox: any = ({ count, increment }) => {
    return (
        <div className={styles.container}>
            lorem ipsum
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

const mapStateToProps = ({ count }) => {
    return { count }
}

const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechBox)
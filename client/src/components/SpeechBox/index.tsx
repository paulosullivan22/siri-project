import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch as reduxDispatch } from "redux";
import cx from 'classnames'

import actions from '../../store/actionCreators'
import { IActionCreators, IDispatchProps, IState } from "../../store/interfaces";
import Buttons from "../Buttons";
import DialogBox from '../DialogBox'

import styles from './styles.module.scss'

interface IProps {
    isRecording: boolean
}

type Props = IProps & IDispatchProps & IState

const SpeechBox: FC<Props> = ({ actions, dialog, isRecording, isSpeechBoxExpanded }: Props) => {
    const { setSpeechBoxExpandedState }: IActionCreators = actions

    return (
        <div className={cx(styles.container, { [styles.isExpanded]: isSpeechBoxExpanded})} onClick={() => setSpeechBoxExpandedState(true)}>
            <div className={cx(styles.buttonsContainer, { [styles.isExpanded]: isSpeechBoxExpanded})}>
                <Buttons isRecording={isRecording} />
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

function mapStateToProps(state: IState): IState {
    return {
        dialog: state.dialog,
        isSpeechBoxExpanded: state.isSpeechBoxExpanded
    }
}

function mapDispatchToProps(dispatch: reduxDispatch): IDispatchProps {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechBox)

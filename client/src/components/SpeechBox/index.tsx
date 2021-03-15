import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch as reduxDispatch } from "redux";
import cx from 'classnames'

import actions from '../../store/actionCreators'
import { IActionCreators, IDialogContent, IDispatchProps, IState } from "../../store/interfaces";
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
        <div
            className={cx(styles.container, { [styles.isExpanded]: isSpeechBoxExpanded})}
            onClick={() => setSpeechBoxExpandedState(true)}
        >
            {dialog.map((content: IDialogContent, index: number) => {
                return (
                    <div className={styles.dialogContainer} key={index}>
                        <DialogBox content={content} />
                    </div>
                )
            })}
            <div className={cx(styles.buttonsContainer, { [styles.isExpanded]: isSpeechBoxExpanded})}>
                <Buttons isRecording={isRecording} isSpeechBoxExpanded={isSpeechBoxExpanded} />
            </div>
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

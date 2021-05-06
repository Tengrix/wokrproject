import React from 'react'
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    messagesType,
    newMessageBodyAC,
    sendMessageAC,
    userType
} from "../../redux/dialog-reducer";

type MapStateToPropsType = {
    users: userType[];
    messages: messagesType[];
    newMessageBody: string;
}

type MapDispatchToPropsType = {
    updatedMessageBody: (text:string) => void;
    sendMessage: () => void;
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType) :MapStateToPropsType => {
    return {
        users:state.dialogPage.users,
        messages:state.dialogPage.messages,
        newMessageBody:state.dialogPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch:Dispatch) : MapDispatchToPropsType => {
    return {
        updatedMessageBody: (text:string) => {
            dispatch(newMessageBodyAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
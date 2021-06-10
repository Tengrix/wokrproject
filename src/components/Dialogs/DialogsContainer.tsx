import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    InitialStateType, sendMessage, updatedMessageBody,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {compose} from 'redux'
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";
import {withRouter} from "react-router";

type MapStateToPropsType = {
    dialogPage: InitialStateType
}

type MapDispatchToPropsType = {
    updatedMessageBody: (text:string) => void;
    sendMessage: () => void;
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state:AppStateType) : MapStateToPropsType => ({
    dialogPage:state.dialogPage
})

export default compose<React.ComponentType>(connect(mapStateToProps,
        {updatedMessageBody,sendMessage}),
    withRouter,withAuthRedirectComponent)(Dialogs)
import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType2 = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state:AppStateType) :MapStateToPropsType2 =>{
    return {
        isAuth: state.auth.data.isAuth
    }
}
export function withAuthRedirectComponent <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props:MapStateToPropsType2) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to='login'/>
        return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
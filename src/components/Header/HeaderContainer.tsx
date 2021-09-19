import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    AuthLogOut,
    AuthMe,
    setUserDataType
} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToProps = {
    AuthLogOut:() => number;
}
export type HeaderContainerTypeProps = mapStateToPropsType & mapDispatchToProps
class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.AuthMe()
    }

    render() {
        return <Header {...this.props}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
                       AuthLogOut={this.props.AuthLogOut}
        />
    }
}
let mapStateToProps = (state:AppStateType): mapStateToPropsType => {
    return{
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
    }
}
export default connect(mapStateToProps,{AuthMe,AuthLogOut}) (HeaderContainer)
import React from 'react'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setToggleFetching, setUserDataType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    data: setUserDataType
    isAuth: boolean
    login: string | null
    isFetching: boolean
}
type mapDispatchToProps = {
    setAuthUserData: (data: setUserDataType) => void;
    setToggleFetching: (isFetching: boolean) => void;
}
export type HeaderContainerTypeProps = mapStateToPropsType & mapDispatchToProps
class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).
        then(response=> {
            this.props.setToggleFetching(false)
            if(response.data.resultCode===0){
                let {id,login,email} = response.data.data
                this.props.setAuthUserData(id,login,email)
                this.props.setToggleFetching(true)
            }
        })
    }

    render() {
        return <Header {...this.props}
                       data={this.props.data}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
                       setAuthUserData={this.props.setAuthUserData}
                       isFetching={this.props.isFetching}
                       setToggleFetching={this.props.setToggleFetching}
        />
    }
}
let mapStateToProps = (state:AppStateType): mapStateToPropsType => {
    return{
        data: state.auth.data,
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        isFetching: state.auth.isFetching
    }

}
export default connect(mapStateToProps,{setAuthUserData,setToggleFetching}) (HeaderContainer)
import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputArea} from "../common/FormController/FormController";
import {maxLengthCreator, requiredField} from "../utils/validators/validator";
import {connect, useDispatch, useSelector} from "react-redux";
import {AuthLogin, AuthLogOut, Captcha} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './../common/FormController/FormControl.module.css'


export type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha:string
}

let maxLength = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo( ({handleSubmit, error}) => {
    let captcha = useSelector<AppStateType, string>(state => state.auth.captcha)
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field component={InputArea} name={'login'} type="text" placeholder={'login'}
                       validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <Field component={InputArea} name={'password'} type="password" placeholder={'password'}
                       validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox" placeholder={'rememberMe'}/>
            </div>
            <div>
                {error ? <div className={s.formSummaryError}>
                    {error}
                </div> : ''}
                <div>
                    {captcha && <img src={captcha} alt=""/>}
                    {captcha && <Field component={InputArea} name={'captcha'} type='captcha' placeholder={'captcha'}/>}
                </div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
})
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = React.memo(() => {
    const isAuth = useSelector<AppStateType,boolean>(state => state.auth.data.isAuth)
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(AuthLogin(formData.login, formData.password, formData.rememberMe,formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
})


export default Login
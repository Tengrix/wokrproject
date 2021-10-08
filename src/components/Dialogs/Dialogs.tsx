import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormController/FormController";
import {maxLengthCreator, requiredField} from "../utils/validators/validator";
import {useDispatch, useSelector} from "react-redux";
import {dialogActions, InitialDialogStateType} from "../../redux/dialog-reducer";
import {AppStateType} from "../../redux/redux-store";

let maxLength = maxLengthCreator(10)
const Dialogs = React.memo(() => {
    const dialogPage = useSelector<AppStateType,InitialDialogStateType>(state => state.dialogPage)
    const dispatch = useDispatch()
    let state = dialogPage

    let usersData = state.users.map(el => <DialogItems
        key={el.id}
        name={el.name}
        id={el.id}
    />)
    let messagesData = state.messages.map(el => <Message
        key={el.id}
        messages={el.messages}
        id={el.id}
    />)
    let onNewMessageClick = (value:any) => {
        dispatch(dialogActions.sendMessage(value.dialog))
    }
    return (
        <div className={s.dialogs}>
            <div>

                {usersData}

            </div>
            <div className={s.messages}>

                <div> {messagesData}</div>
                <div>
                    <MessagesReduxForm onSubmit={onNewMessageClick}/>
                </div>

            </div>
        </div>
    )
})
const DialogMessageForm:React.FC<InjectedFormProps<string>> = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'dialog'} type={'text'} placeholder={'Enter your message'}
                       validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <button > Send </button>
            </div>
        </form>
    )

}

export const MessagesReduxForm = reduxForm<string>({form: 'dialog'})(DialogMessageForm)
export default Dialogs
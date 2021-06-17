import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormController/FormController";
import {maxLengthCreator, requiredField} from "../utils/validators/validator";

let maxLength = maxLengthCreator(10)
function Dialogs(props: DialogsPropsType) {
    let state = props.dialogPage

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
        props.sendMessage(value.dialog)
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
}
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
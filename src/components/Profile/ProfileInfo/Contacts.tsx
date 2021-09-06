
type ContactsType = {
    contactsTitle: string;
    contactsValue: string;
    edit:boolean;
}

const Contacts = ({contactsTitle,contactsValue}:ContactsType) => {
    return(
        <div>
            <b>{contactsTitle}:</b>

                {contactsValue}
                {/*{edit?<input type={`contacts.${key}`} {...formik.getFieldProps(`contacts.${key}`)}/>*/}
                {/*    :Object.entries(profile.contacts)*/}
                {/*}*/}
                {/*{formik.touched.contacts && formik.errors.contacts &&*/}
                {/*<div style={{color: 'red'}}>{formik.errors.contacts}</div>}*/}
        </div>
    )
}
export default Contacts;
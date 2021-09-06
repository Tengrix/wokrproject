import {useFormik} from "formik";
import {ProfileType, saveUserProfile} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {useState} from "react";
import s from './ProfileInfo.module.css'

type ContactsType = {
    vk: string;
    github: string;
    instagram: string;
    facebook: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
}
type PropsType = {
    isOwner: boolean;
    profile:ProfileType
}
type FormikErrorType = {
    userId: number;
    aboutMe: string;
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription:string;
    contacts: ContactsType;
}

const ProfileData = (props: PropsType) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState<boolean>(false)
    const [lookingForAJob, setLookingForAJob] = useState<boolean>(props.profile.lookingForAJob)
    const profile = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
    console.log(props.profile.aboutMe)
    const formik = useFormik({
        initialValues: {
            userId: 16786,
            aboutMe:props.profile.aboutMe,
            fullName: props.profile.fullName,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: {
                vk: props.profile.contacts.vk,
                github: props.profile.contacts.github,
                instagram: props.profile.contacts.instagram,
                facebook: props.profile.contacts.facebook,
                twitter: props.profile.contacts.twitter,
                website: props.profile.contacts.website,
                youtube: props.profile.contacts.youtube,
                mainLink: props.profile.contacts.mainLink
            }
        },
        onSubmit: values => {
            dispatch(saveUserProfile(values))
            formik.resetForm();
            setEdit(false)
        },
    })
    return (
        <div>
            {props.isOwner && <button onClick={() => setEdit(!edit)}>edit</button>}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <b>About Me:</b>
                    {edit ? <input type={'aboutMe'} defaultValue={props.profile.aboutMe} {...formik.getFieldProps(`aboutMe`)}/> : props.profile.aboutMe}
                    {formik.touched && formik.errors.aboutMe &&
                    <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>}
                </div>
                <div>
                    <b>Full name:</b>
                    {edit ? <input type={'fullName'} {...formik.getFieldProps(`fullName`)}/> : props.profile.fullName}
                    {formik.touched.fullName && formik.errors.fullName &&
                    <div style={{color: 'red'}}>{formik.errors.fullName}</div>}
                </div>
                <div>
                    <b>Looking for job:</b>
                    {edit ? <input
                        type={'checkbox'} onChange={e=>{setLookingForAJob(e.target.checked)}}/> :  props.profile.lookingForAJob ? 'no' : 'yes'}
                    {formik.touched.lookingForAJob && formik.errors.lookingForAJob &&
                    <div style={{color: 'red'}}>{formik.errors.lookingForAJob}</div>}
                </div>
                {lookingForAJob &&
                <div>
                    <b>What job you looking for:</b>
                    {edit ? <input
                        type={'lookingForAJobDescription'} {...formik.getFieldProps(`lookingForAJobDescription`)}/> :  props.profile.lookingForAJobDescription}
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                    <div style={{color: 'red'}}>{formik.errors.lookingForAJobDescription}</div>}
                </div>
                }
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((key, i) => {
                    return <div className={s.contacts} key={i}>
                        <b>{key}:</b>
                        <div>
                            {edit ? <input
                                type={`contacts.${key}`} {...formik.getFieldProps(`contacts.${key}`)}/> :  props.profile.contacts[key as keyof ContactsType]}
                        </div>
                        {/*{formik.touched.contacts?.[key as keyof ContactsType] && formik.errors.contacts?.[key as keyof ContactsType] &&*/}
                        {/*<div style={{color: 'red'}}>{formik.errors.contacts?.[key as keyof ContactsType]}</div>}*/}
                    </div>
                })}
                <button type={'submit'} color={'primary'}>save</button>
            </form>
        </div>
    )
}
export default ProfileData;
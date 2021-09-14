import {useFormik} from "formik";
import {ProfileType, saveUserProfile, setError} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import s from './ProfileInfo.module.css'
import {makeStyles, Modal, TextField} from "@material-ui/core";
import {AppStateType} from "../../../redux/redux-store";

type ContactsType = {
    vk: string;
    github: string;
    instagram: string;
    facebook: string;
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
type PropsType = {
    isOwner: boolean;
    profile: ProfileType;
}
type FormikErrorType = {
    userId?: number;
    aboutMe?: string;
    fullName?: string;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    contacts: ContactsType;
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const ProfileData = (props: PropsType) => {
    const dispatch = useDispatch()
    const errors = useSelector<AppStateType,string>(state => state.profilePage.error)
    const [serverError, setServerError] = useState<string>(errors)
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            userId: props.profile.userId,
            aboutMe: props.profile.aboutMe,
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
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
            },
            photos:{
                small:'',
                large:''
            }
        },
        validate: (values) => {
            const errors = {} as FormikErrorType;
            if (!values.aboutMe) {
                errors.aboutMe = 'Required';
            }
            if (!values.fullName) {
                errors.fullName = 'Required';
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await dispatch(saveUserProfile(values))
                handleClose()
                setServerError('')
            }catch (e){
                setError(e)
                setServerError(e)
            }
            formik.resetForm();
        },
    })
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form onSubmit={formik.handleSubmit}>
                {serverError && <div style={{border: "1px solid red", color: "darkred", padding: "10px"}}>
                    {serverError}
                </div>}
                <div>
                    <b>About Me:</b>
                    <TextField type={'aboutMe'}  {...formik.getFieldProps('aboutMe')}/>
                    {formik.touched.aboutMe && formik.errors.aboutMe &&
                    <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>}
                </div>
                <div>
                    <b>Full name:</b>
                    <input type={'fullName'} {...formik.getFieldProps('fullName')}/>
                    {formik.touched.fullName && formik.errors.fullName &&
                    <div style={{color: 'red'}}>{formik.errors.fullName}</div>}

                </div>
                <div>
                    <b>Looking for job:</b>
                    <input type={'checkbox'}/>
                </div>
                <div>
                    <b>My skills:</b>
                    <input type={'lookingForAJobDescription'} {...formik.getFieldProps(`lookingForAJobDescription`)}/>
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                    <div style={{color: 'red'}}>{formik.errors.lookingForAJobDescription}</div>}
                </div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map((key, i) => {
                    return <div className={s.contacts} key={i}>
                        <b>{key}:</b>
                        <div>
                            <input type={`contacts.${key}`} {...formik.getFieldProps(`contacts.${key}`)}/>
                        </div>

                    </div>
                })}
                <button disabled={!formik.isValid} type={'submit'} color={'primary'}>save</button>
            </form>
        </div>
    )

    return (
        <div>
            {props.isOwner && <button type="button" onClick={handleOpen}>
                update profile
            </button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

            <div>
                <b>About me:</b> {props.profile.aboutMe}

            </div>
            <div>
                <b>Name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My Skills:</b> {props.profile.lookingForAJobDescription}
            </div>
            <b> Contacts:</b>
            <div className={s.contacts}><b>vk:</b> {props.profile.contacts.vk}</div>
            <div className={s.contacts}><b>github:</b> {props.profile.contacts.github}</div>
            <div className={s.contacts}><b>youtube:</b> {props.profile.contacts.youtube}</div>
            <div className={s.contacts}><b>facebook:</b> {props.profile.contacts.facebook}</div>
            <div className={s.contacts}><b>website:</b> {props.profile.contacts.website}</div>
            <div className={s.contacts}><b>mainLink:</b> {props.profile.contacts.mainLink}</div>
            <div className={s.contacts}><b>instagram:</b> {props.profile.contacts.instagram}</div>
            <div className={s.contacts}><b>twitter:</b> {props.profile.contacts.twitter}</div>

        </div>
    )
}
export default ProfileData;
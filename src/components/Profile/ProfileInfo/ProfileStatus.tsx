import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {updateProfileStatus} from "../../../redux/profile-reducer";
type ProfileStatusPropsType = {
    status: string;
    updateProfileStatus: (status:string) => void;
}

function ProfileStatus(props: ProfileStatusPropsType) {
    const dispatch = useDispatch()
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.status);
    useEffect(() =>{
         dispatch(updateProfileStatus(title))
    },[props.status])
    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.status);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.updateProfileStatus(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
                :
                <div>
                    <input onChange={changeTitle} autoFocus={true} onBlur={activateViewMode} type="text" value={title}/>
                </div>
            }

        </div>
    )

}

export default ProfileStatus
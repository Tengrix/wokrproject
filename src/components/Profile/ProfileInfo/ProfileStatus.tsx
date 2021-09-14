import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateProfileStatus} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
type ProfileStatusPropsType = {
    status: string;
    updateProfileStatus: (status:string) => void;
    isOwner:boolean
}

function ProfileStatus(props: ProfileStatusPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.status);

    const activateEditMode = () => {
        if(props.isOwner){
            setEditMode(true);
            setTitle(props.status);
        }
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
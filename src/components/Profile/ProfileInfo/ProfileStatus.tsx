import React, {ChangeEvent, useState} from 'react'

type ProfileStatusPropsType = {
    status: string;
    updateProfileStatus: (status:string) => void;
    isOwner:boolean;
    isAuth:boolean;
}

const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.status);

    const activateEditMode = () => {
        if(props.isOwner && props.isAuth){
            setEditMode(true);
            setTitle(props.status);
        }
    }
    const activateViewMode = () => {
        if(props.isAuth){
            setEditMode(false);
            props.updateProfileStatus(title);
        }
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

})

export default ProfileStatus
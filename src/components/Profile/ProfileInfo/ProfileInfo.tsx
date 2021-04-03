import React from 'react'
import s from './ProfileInfo.module.css'
type ProfileInfoType = {
    pic:string;
}

function ProfileInfo(props:ProfileInfoType){
    return (
        <div>
            <div>
                <img
                    src={props.pic}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo
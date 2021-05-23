import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
type ProfileInfoType = {
    pic:string;
    profile:ProfileType
}

function ProfileInfo(props:ProfileInfoType){
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            <div>
                <img
                    src={props.pic}/>
            </div>
            <div className={s.descriptionBlock}>
                <p>
                    {props.profile.fullName}
                </p>
                <img src={props.profile.photos.small} alt=""/>
                <span> Я будущий спец в IT-INDUSTRY</span>
                <div>
                    <div>{props.profile.contacts.vk} </div>
                    <div>{props.profile.contacts.github} </div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.twitter} </div>
                    <div>{props.profile.contacts.website} </div>
                    <div>{props.profile.contacts.instagram} </div>
                </div>
                <div>
                    {props.profile.lookingForAJob}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
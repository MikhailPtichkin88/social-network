import React from 'react';
import avatar from '../../../images/avatar.jpg'
import c from './Profile.module.scss'
import {ProfileUserType} from "../../../redux/profile-reducer";
import Spinner from "../../common/spinner/Spinner";
import Contacts from "./contacts/Contacts";
import yesImg from '../../../images/yes.svg';
import noImg from '../../../images/no.svg';


type ProfilePropsType = {
    profile: ProfileUserType
}

const Profile = (props: ProfilePropsType) => {
    if (Object.keys(props.profile).length < 1) {
        return <Spinner show={true}/>
    }


    let {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription: jobDescr,
        fullName,
        userId,
        photos
    } = props.profile
    let photoSrc = (photos.large || photos.small) ? (photos.large || photos.small) : avatar

    return (
        <>
            <div className={c.wrapper}>
                <img className={c.avatar} src={photoSrc} alt="avatar"/>

                <div className={c.info}>
                    <h2 className={c.name}>{fullName}</h2>
                    <p className={c.about}><span className={c.shadow}>About me:</span> {aboutMe}</p>
                    <div className={c.jobBlock}>
                        <p className={c.jobLabel+' '+c.shadow}>Looking for a job:</p>
                        <img className={c.jobImg} src={lookingForAJob ? yesImg : noImg} alt="yes/no img"/>
                    </div>
                    <p className={c.jobDescr}><span className={c.shadow}>What kind of job:</span> {jobDescr}</p>
                    <Contacts contacts={contacts}/>
                </div>
            </div>
        </>
    );
};

export default Profile;
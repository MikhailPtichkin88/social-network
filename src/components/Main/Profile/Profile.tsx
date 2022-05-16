import React from 'react';
import avatar from '../../../images/avatar.jpg'
import c from './Profile.module.scss'

const Profile = () => {
    return (
        <>
            <div className={c.wrapper}>
                <img  className={c.avatar} src={avatar} alt="avatar"/>

                <div className={c.info}>
                    <h2 className={c.name}>Mike</h2>
                    <p>Date of Birth: 23.04.1990</p>
                    <p>City: Moscow</p>
                    <p>Education: Russian Economic University</p>
                    <p>Web-site:<a href="#"> mikhail-ptichkin.info</a></p>
                </div>
            </div>
        </>
    );
};

export default Profile;
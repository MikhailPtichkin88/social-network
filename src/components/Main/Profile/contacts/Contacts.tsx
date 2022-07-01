import React from 'react';
import {UserProfileContactsType} from "../../../../redux/profile-reducer";

import styles from './Contacts.module.scss'

import facebook from '../../../../images/social/facebook.svg';
import website from '../../../../images/social/likedin.svg';
import vk from '../../../../images/social/vk.svg';
import twitter from '../../../../images/social/twitter.svg';
import instagram from '../../../../images/social/instagram.svg';
import youtube from '../../../../images/social/youtube.svg';
import github from '../../../../images/social/github.svg';
import mainLink from '../../../../images/social/laughing-smiley.svg';


type ContactsPropsType = {
    contacts: UserProfileContactsType
}

const Contacts = (props: ContactsPropsType) => {
    let arr = []
    let socialImgs = [facebook, website, vk, twitter, instagram, youtube, github, mainLink]
    let values = Object.values(props.contacts)

    for (let i=0; i<Object.keys(props.contacts).length; i++){
        arr.push(
            [socialImgs[i], values[i]]
        )
    }

    return (
        <ul className={styles.list}>
            {
                arr.map((contact,i)=>{

                    if(contact[1]!==null && contact[0]!==null){
                        return <li className={styles.item} key={i}>
                            <a className={styles.link} href={contact[1]}>
                                <img className={styles.img} src={contact[0]} alt="social-image"/>
                            </a>
                        </li>
                    }
                })
            }
        </ul>
    );
};

export default Contacts;
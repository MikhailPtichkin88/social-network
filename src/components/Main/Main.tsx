import React from 'react';
import './Main.scss'
import bg from "../../images/bg.jpg";

const Main = () => {
    return (
        <>
            <main className='main'>

                <img className="main__bg-img" src={bg} alt="background image"/>

                <div className="profile">
                    <img src="src/components/Main/Main" alt="" className="profile__avatar"/>

                    <div className="profile__info">
                        <h2 className="profile__name">Mike</h2>
                        <p>Date of Birth: 23.04.1990</p>
                        <p>City: Moscow</p>
                        <p>Education: Russian Economic University</p>
                        <p>Web-site: mikhail-ptichkin.info</p>
                    </div>
                </div>

                <h3>My Posts</h3>

                <form className="message" action="src/components/Main/Main#">
                    <label className="sr-only" htmlFor="message">send message input</label>
                    <input className='message__input' id='message' name='message' type="text"/>
                    <button className="message__submit" type="submit">Send</button>
                </form>

                <div className="posts">
                    My posts
                    <div className="post">
                        post
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
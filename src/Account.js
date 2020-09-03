import React, { useEffect } from 'react';
import './Account.css'

function Account({ contentHide }) {
    const showContent = () => {
        contentHide(true);
        localStorage.setItem('showavatar', true);
    }
    useEffect(() => {
        localStorage.removeItem('showavatar');
    }, [])

    return (
        <div className="account">
            <div className="account__content">
                <h1 className="account__text">Who's Watching?</h1>
                <img onClick={showContent} className="account__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar Logo" />
                <h4 className="account__user">Drunk Mutant</h4>
                <button className="account__manage">Manage Profile</button>
            </div>
        </div>
    )
}

export default Account

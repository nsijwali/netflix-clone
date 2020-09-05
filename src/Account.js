import React from 'react';
import './Account.css';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Account({ contentHide }) {
    const [{ isAvatarHidden }, dispatch] = useStateValue();

    const showContent = () => {
        contentHide(true);
        dispatch({
            type: actionTypes.SET_AVATAR_STATE,
            isAvatarHidden: true
        });
    }

    return (
        <div className="account">
            <div className="account__content">
                <div className="account__text">Who's Watching?</div>
                <div className="account__wrapper">
                    <div className="account__profile">
                        <img onClick={showContent} className="account__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar Logo" />
                        <div className="account__user">Drunk Mutant</div>
                    </div>
                    <div className="account__profile">
                        <img onClick={showContent} className="account__avatar" src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSz8U4uC6_i0Fuc-oUrLQ-6_4cN4K_0kkS76utZWTEfAAFwG6TB09D0nSC1NqqtCJfckNvLVMajXBYjOSGc7zZi0Dx7z.png?r=b97" alt="Avatar Logo" />
                        <div className="account__user">Doraemon</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account

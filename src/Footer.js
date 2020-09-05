import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import Youtube from '@material-ui/icons/YouTube';
import './Footer.css';

function Footer() {
    const footerList = [
        {
            id: 1,
            label: 'Audio and subtitles'
        },
        {
            id: 2,
            label: 'Audio Description'
        },
        {
            id: 3,
            label: 'Help Center'
        },
        {
            id: 4,
            label: 'Gift Cards'
        },
        {
            id: 5,
            label: 'Media Center'
        },
        {
            id: 6,
            label: 'Investors Relations'
        },
        {
            id: 7,
            label: 'Jobs'
        },
        {
            id: 8,
            label: 'Terms of Use'
        },
        {
            id: 9,
            label: 'Privacy'
        },
        {
            id: 10,
            label: 'Legal Notices'
        },
        {
            id: 11,
            label: 'Cookie Preferences'
        },
        {
            id: 12,
            label: 'Corporate Information'
        },
        {
            id: 13,
            label: 'Contact Us'
        }
    ]
    return (
        <div className="footer">
            <div className="footer__media">
                <Facebook fontSize="large" style={{ color: "grey" }} />
                <Instagram fontSize="large" style={{ color: "grey" }} />
                <Twitter fontSize="large" style={{ color: "grey" }} />
                <Youtube fontSize="large" style={{ color: "grey" }} />
            </div>
            <ul className="footer__links">
                {footerList.map(item => (
                    <li key={item.id} className="footer__link">
                        {item.label}
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Footer

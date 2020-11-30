import React from 'react';
import SocialItems from './SocialItems';

function Social(props) {
    const socials = props.socials;
    const socialItems = socials.map((social) =>
        <SocialItems key={social.id} url={social.url} name={social.name} icon={social.icon} />
    );

    return (

        // Social
        <footer>
            <ul className="icons">
                {socialItems}
            </ul>
        </footer>
    )
}

export default Social;
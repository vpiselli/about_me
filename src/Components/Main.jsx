import React from 'react';
import User from './User';
import Contact from './Contact';
import Social from './Social';
import A from './A';

const socials = [
    {id:1, name: 'Twitter', url:'https://twitter.com/vpiselli', icon:'fa-twitter' },
    {id:2, name: 'LinkedIn', url:'https://www.linkedin.com/in/valerio-piselli/', icon:'fa-linkedin' },
    {id:3, name: 'Github', url:'https://github.com/vpiselli', icon:'fa-github' },
];

const myDescryption = 
    <div>
        <p>
            Full Stack Developer
        </p>
    </div>

const myName = process.env.REACT_APP_MY_NAME;
const avatar = process.env.REACT_APP_AVATAR;
const showContactForm = false;

function Main() {
    return (

        <section id="main">
			
			<User myName={myName} myDescryption={myDescryption} avatar={avatar} />
            <Contact showContactForm={showContactForm} />
			<Social socials={socials} />
			
		</section>

    )
}

export default Main;
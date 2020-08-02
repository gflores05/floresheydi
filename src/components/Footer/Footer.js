import React from 'react';

import Contact from './Contact/Contact';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import Copyright from './Copyright/Copyright';

import './Footer.scss';

const footer = () => (
    <footer id="footer">
        <div className="inner">
            <Contact></Contact>
            <SocialNetworks></SocialNetworks>
            <Copyright></Copyright>
        </div>
    </footer>
)

export default footer;
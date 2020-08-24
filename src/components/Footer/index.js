import React from 'react';

import Contact from './Contact';
import SocialNetworks from './SocialNetworks';
import Copyright from './Copyright';

import './style.scss';

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
import React from 'react';

import './Logo.scss';

const logo = () => (
    <a href="index.html" className="logo">
        <span className="symbol">
            <img src="images/logo.svg" alt="" />
        </span>
        <span className="title">Phantom</span>
    </a>
)

export default logo;
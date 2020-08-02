import React from 'react';

import heydiLogo from '../../../assets/images/logo.jpg'

import './Logo.scss';

const logo = () => (
    <div className="heydi-banner">
        <a href="index.html" className="logo">
            <span className="symbol">
                <img src={heydiLogo} alt="" />
            </span>
        </a>
    </div>
)

export default logo;
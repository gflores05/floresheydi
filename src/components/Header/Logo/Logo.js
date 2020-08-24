import React from 'react';

import Sky from './Sky/Sky';

import heydiLogo from '../../../assets/images/logo.png'
import shopRoof from '../../../assets/images/shoproof.png'

import './Logo.scss';

const logo = () => (
    <div className="heydi-banner">
        <Sky></Sky>
        <div className="heydi-logo">
            <a href="index.html" className="logo">
                <span className="symbol">
                    <img src={heydiLogo} alt="" />
                </span>
            </a>
        </div>
        <div className="heydi-shop-roof">
            <img src={shopRoof} alt="" />
        </div>
    </div>
)

export default logo;
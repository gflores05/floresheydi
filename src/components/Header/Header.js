import React from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

import './Header.scss';

const header = () => (
    <header id="header">
        <div className="inner">
            <Logo></Logo>
            <Menu></Menu>
        </div>
    </header>
)
export default header;
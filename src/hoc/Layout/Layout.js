import React from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Layout.scss'

const layout = (props) => 
(
    <Aux>
        <Header></Header>
        <div id="main">
			<div className="inner">{props.children}</div>
        </div>
        <Footer></Footer>
    </Aux>
    
);

export default layout;
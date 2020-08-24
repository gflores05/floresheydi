import React from 'react';

import Aux from '../Aux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Flowers from '../../components/Flowers';

import './style.scss'

const layout = (props) => 
(
    <Aux>
        <Flowers></Flowers>
        <Header></Header>
        <div id="main">
			<div className="inner">{props.children}</div>
        </div>
        <Footer></Footer>
    </Aux>
    
);

export default layout;
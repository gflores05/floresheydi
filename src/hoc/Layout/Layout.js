import React from 'react';

import Aux from '../Aux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Flowers from '../../components/Flowers/Flowers';

import './Layout.scss'

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
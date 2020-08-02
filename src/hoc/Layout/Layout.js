import React from 'react';
import { NavLink } from 'react-router-dom';

import './Layout.scss'

const layout = (props) => 
(
    <div>
        <ul>
            <li>
            <NavLink 
                to="/"
                exact="true"
                activeClassName="active">
                    Inicio
            </NavLink>
            </li>
            <li>
            <NavLink 
                to="/catalog"
                activeClassName="active">
                    Catalogo
            </NavLink>
            </li>
            <li>
            <NavLink 
                to="/contact"
                activeClassName="active">
                    Contacto
            </NavLink>
            </li>
        </ul>
        {props.children}
    </div>
    
);

export default layout;
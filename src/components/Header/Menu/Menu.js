import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';

import './Menu.scss';

class Menu extends Component {
    state = {
        visible: false
    }
    toggleMenu() {
        // evt.preventDefault();
        // evt.stopPropagation();

        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        return (
            <Aux>
                <nav className="menu-button">
                    <ul>
                        <li><a href="#menu" onClick={this.toggleMenu.bind(this)}>Menu</a></li>
                    </ul>
                </nav>
                <nav id="menu" className={ this.state.visible ? 'is-menu-visible' : ''}>
                    <div className="inner">
                        <h2>Menu</h2>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/"
                                    exact={true}
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
                    </div>
                    <a className="close" onClick={this.toggleMenu.bind(this)} href="#menu">Close</a>
                </nav>
            </Aux>
        );
    }
}

export default Menu;
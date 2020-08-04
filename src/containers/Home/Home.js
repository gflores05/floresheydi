import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Tiles from '../../components/Tiles/Tiles';

import './Home.scss';

class Home extends Component {
    render() {
        const categories = [/*{
            id: 1,
            background: 'style1',
            image: pic01,
            url: '/catalog',
            title: 'Cumpleaños',
            text: 'Arreglos para cumpleaños'
        }, {
            id: 2,
            background: 'style2',
            image: pic02,
            url: '/catalog',
            title: 'Aniversarios',
            text: 'Arreglos para aniversarios'
        }, {
            id: 3,
            background: 'style3',
            image: pic03,
            url: '/catalog',
            title: 'Bodas',
            text: 'Arreglos para bodas'
        }, {
            id: 4,
            background: 'style4',
            image: pic04,
            url: '/catalog',
            title: 'Dia de las madres',
            text: 'Arreglos para las madres'
        }, {
            id: 5,
            background: 'style5',
            image: pic05,
            url: '/catalog',
            title: 'Quinceaños',
            text: 'Quinceaños'
        }, {
            id: 6,
            background: 'style6',
            image: pic06,
            url: '/catalog',
            title: 'Eventos',
            text: 'Arreglos para eventos'
        }*/];
        return (
            <Aux>
                <header>
                    <h1>Arreglos florales para toda ocasi&oacute;n</h1>
                    <p>Ofreciendo a nuestros clientes una opción diferente justo a la medida de su presupuesto.</p>
                </header>
                <Tiles items={categories}></Tiles>
            </Aux>
        );
    }
}

export default Home;
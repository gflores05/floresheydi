import React from 'react';

import Tile from './Tile';

import './style.scss';

const tiles = (props) => {
    const items = props.items.map(item => {
        return (
            <Tile
                key={item.id}
                background={item.background}
                image={item.image}
                url={item.url}
                title={item.title}
                text={item.text}></Tile>
        );
    });

    return (
        <section className="tiles">
            {items}
        </section>
    );
};

export default tiles;

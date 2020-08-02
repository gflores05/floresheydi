import React from 'react';

import './Tile.scss';

const tile = (props) => (
    <article className={props.background}>
        <span className="image">
            <img src={props.image} alt="" />
        </span>
        <a href={props.url}>
            <h2>{props.title}</h2>
            <div className="content">
                <p>{props.text}</p>
            </div>
        </a>
    </article>
);

export default tile;

import React from 'react';

import './Tile.scss';

const tile = (props) => {
    // let image = require('../../../assets/images/categories/fifteen-years.jpg');

    //try {
        // image = require(props.image);
    //} catch(err) {}

    return(
        <article className={props.background}>
            <span className="image">
                <img src={`${process.env.PUBLIC_URL}${props.image}`} alt="" />
            </span>
            <a href={props.url}>
                <h2>{props.title}</h2>
                <div className="content">
                    <p>{props.text}</p>
                </div>
            </a>
        </article>
    );
};

export default tile;

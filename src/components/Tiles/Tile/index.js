import React from 'react';

import './style.scss';

const tile = (props) => {

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

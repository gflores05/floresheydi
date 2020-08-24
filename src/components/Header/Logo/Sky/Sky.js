import React from 'react';

import cloud1 from '../../../../assets/images/cloud1.png';
import cloud2 from '../../../../assets/images/cloud2.png';
import cloud3 from '../../../../assets/images/cloud3.png';
import cloud4 from '../../../../assets/images/cloud4.png';
import cloud5 from '../../../../assets/images/cloud5.png';

import './Sky.scss';

const sky = () => (
    <div className="heydi-sky">
        <div className="heydi-cloud cloud-1">
            <img src={cloud1} alt="cloud"/>
        </div>
        <div className="heydi-cloud cloud-2">
            <img src={cloud2} alt="cloud"/>
        </div>
        <div className="heydi-cloud cloud-3">
            <img src={cloud3} alt="cloud"/>
        </div>
        <div className="heydi-cloud cloud-4">
            <img src={cloud4} alt="cloud"/>
        </div>
        <div className="heydi-cloud cloud-5">
            <img src={cloud5} alt="cloud"/>
        </div>
    </div>
)

export default sky;
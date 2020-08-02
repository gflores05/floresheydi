import React, { Component } from 'react';

import './Flower.scss';

const INIT = -192;
const INCREMENT = 100;
const INTERVAL = 1000;
const ITEM_HEIGHT = 96;
class Flower extends Component{
    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);

        const initPos = this.generateRandom(-196, -500);
        this.state = {
            top: initPos,
            transition: 'top 1s linear'
        }
    }
    
    componentDidMount() {
        this.animate();
    }
    generateRandom(start, end) {
        return Math.floor(Math.random() * end) + start;
    }
    animate() {
        if (this.state.top <= INIT) {
            this.setState({
                transition: 'top 1s linear'
            });
        }
        this.setState({
            top: this.state.top + INCREMENT
        });
        if(this.state.top >= this.props.limit + ITEM_HEIGHT) {
            const initPos = this.generateRandom(-196, -500);
            this.setState({
                top: initPos,
                transition: 'none'
            });
        }
        setTimeout(() => this.animate(), INTERVAL);
    }
    render() {
        return(
            <div className={'flower ' + this.props.image} style={{transition: this.state.transition, left: this.props.left, top: `${this.state.top}px`}}></div>
        )
    }
}

export default Flower;
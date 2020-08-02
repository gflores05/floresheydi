import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Flower from './Flower/Flower';

import './Flowers.scss';

class Flowers extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    state = {
        width: 0,
        height: 0,
        flowers: [{
            id: 1,
            image: 'flower1',

        }, {
            id: 2,
            image: 'flower2',
            
        }, {
            id: 3,
            image: 'flower3',
            
        }, {
            id: 4,
            image: 'flower4',
            
        }, {
            id: 5,
            image: 'flower5',
            
        }, {
            id: 6,
            image: 'flower1',

        }, {
            id: 7,
            image: 'flower2',
            
        }, {
            id: 8,
            image: 'flower3',
            
        }, {
            id: 9,
            image: 'flower4',
            
        }, {
            id: 10,
            image: 'flower5',
            
        }]
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    generateRandom(start, end) {
        return Math.floor(Math.random() * end) + start;
    }

    render() {
        const items = this.state.flowers.map(item => {
            const left = this.generateRandom(0, this.state.width - 96);
            return (
                <Flower
                    image={item.image}
                    key={item.id}
                    left={`${left}px`}
                    limit={this.state.height}></Flower>
            )
        });
        return (
            <Aux>{items}</Aux>
        );
    }
}

export default Flowers;
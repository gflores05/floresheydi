import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import { Card } from 'react-bootstrap';

import loading from '../../assets/loading.gif';
import './style.scss';

class GCard extends Component {
    state = {
        image: loading,
        loaded: false
    }
    loadImage () {
        if (!this.state.loaded) {
            console.log('loading image');
            const storage = firebase.storage().ref();
            storage.child(this.props.image).getDownloadURL().then((url) => {
                this.setState({
                    image: url,
                    loaded: true
                })
            }).catch((error) => {
            // Handle any errors
            });
        }
    }
    render() {
        this.loadImage();
        return (
            <Card className={this.props.className}>
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                    <button className="primary" onClick={this.props.onClick}>{this.props.buttonText}</button>
                </Card.Body>
            </Card>
        );
    }
}

export default GCard;
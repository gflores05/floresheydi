import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';

import { selectProductsList, selectParamsId } from '../../store/selectors';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Card from '../../components/Card'

import './Catalog.scss';

class Catalog extends Component {

    componentDidMount() {
        const search = {};

        if (this.props.categoryId) {
            search['categories'] = [this.props.categoryId];
        }

        this.props.onLoadProducts(search);
    }

    onOrderProduct(product) {}

    render() {
        const productsCols = this.props.products.map(product => {
            return (
                <Col md="3" sm="12">
                    <Card
                        image={`/images/products/${product.slug}.jpg`}
                        title={product.name}
                        text={product.description}
                        buttonText="Ordenar"
                        onClick={ () => this.onOrderProduct(product) }></Card>
                </Col>
            );
        });
        return (
            <Row>{ this.props.products ? productsCols : <Col xs="12">No se encontraron resultados</Col>}</Row>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: selectProductsList(state),
        categoryId: selectParamsId(props)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onLoadProducts: (search) => dispatch(actions.loadProducts(search))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Catalog ));
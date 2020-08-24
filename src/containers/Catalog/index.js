import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CardColumns } from 'react-bootstrap';

import { selectProductsList, selectParamsId } from '../../store/selectors';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler';
import Card from '../../components/Card'

import './style.scss';

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
                <Card
                    image={`/images/products/${product.slug}.jpg`}
                    title={product.name}
                    text={product.description}
                    buttonText="Ordenar"
                    className="p-3"
                    onClick={ () => this.onOrderProduct(product) }></Card>
            );
        });
        return (
            <CardColumns>{ this.props.products ? productsCols : <div class="col-xs-12">No se encontraron resultados</div>}</CardColumns>
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
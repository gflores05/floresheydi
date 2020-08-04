import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Tiles from '../../components/Tiles/Tiles';

import './Home.scss';

class Home extends Component {
    componentDidMount () {
        this.props.onCategoriesLoad();
    }
    render() {
        let style = 1;
        const categoriesTiles = this.props.categories.map((category, index) => {
            if (style === 7) {
                style = 1;
            }
            return {
                id: index,
                background: `style${style++}`,
                image: `/images/categories/${category.slug}.jpg`,
                url: `/catalog/${category.slug}`,
                title: category.name,
                text: category.description
            }
        });
        return (
            <Aux>
                <header>
                    <h1>Arreglos florales para toda ocasi&oacute;n</h1>
                    <p>Ofreciendo a nuestros clientes una opción diferente justo a la medida de su presupuesto.</p>
                </header>
                <Tiles items={categoriesTiles}></Tiles>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.home.categories
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onCategoriesLoad: () => dispatch(actions.loadCategories())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Home ));
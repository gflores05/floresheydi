import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import { selectCategoriesList } from '../../store/selectors';
import Aux from '../../hoc/Aux';
import withErrorHandler from '../../hoc/withErrorHandler';
import Tiles from '../../components/Tiles';

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
                    <p>Somos un emprendimiento local de Arreglos Florales para toda ocasión con variedad de opciones justo a la medida del presupuesto indicado.
                        Nuestro principal objetivo es brindar diferentes opciones para que cada persona pueda recibir flores en un momento especial o decorar sus eventos
                        con nuestros diferentes diseños, creando un ambiente de armonía y belleza natural. Deseamos que mediante nuestros diseños florales las personas que los
                        reciban puedan experimentar la felicidad del amor que se manifiesta en cada detalle.</p>
                </header>
                <Tiles items={categoriesTiles}></Tiles>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: selectCategoriesList(state)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onCategoriesLoad: () => dispatch(actions.loadCategories())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Home ));
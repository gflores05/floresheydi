import React, { Component } from 'react';
import Aux from '../Aux';

const withErrorHandler = ( WrappedComponent ) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidlMount () {
        }

        componentWillUnmount () {
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        }

        render () {
            return (
                <Aux>
                    <h1>
                        {this.state.error ? this.state.error.message : null}
                    </h1>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Contact from '../Contact';
import SocialNetworks from './SocialNetworks';
import Copyright from './Copyright';
import withErrorHandler from '../../hoc/withErrorHandler';
import {
  selectContactIsSuccess,
  selectContactMessage
} from '../../store/selectors';

import './style.scss';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <Contact
            success={this.props.success}
            message={this.props.message}
            onSendContact={this.props.sendContact}></Contact>
          <SocialNetworks></SocialNetworks>
          <Copyright></Copyright>
        </div>
      </footer>
    );
  }
} 

const mapStateToProps = (state, props) => {
  return {
      success: selectContactIsSuccess(state),
      message: selectContactMessage(state)
  }
};
const mapDispatchToProps = dispatch => {
  return {
      sendContact: (contact) => dispatch(actions.sendContact(contact))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Footer ));
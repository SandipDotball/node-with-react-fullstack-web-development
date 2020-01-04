import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../actions/tokenActions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Emaily'
        description='$5 for 5 email credit'
        amount={500}
        token={token => this.props.handlePayment(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className='waves-effect waves-teal btn-flat white-text'>
          Add Credit
        </button>
      </StripeCheckout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handlePayment: state => dispatch(handleToken(state))
});

export default connect(null, mapDispatchToProps)(Payments);

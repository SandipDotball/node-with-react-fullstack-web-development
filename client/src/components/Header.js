import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.auth !== this.state.user) {
      this.setState({
        user: nextProps.auth.user,
        loading: nextProps.auth.loading
      });
    }
  }
  render() {
    const { user, loading } = this.state;
    const { logout } = this.props;
    return (
      <nav>
        <div className='nav-wrapper container'>
          <Link to={user ? '/surveys' : '/'} className='brand-logo'>
            Emaily
          </Link>
          {!loading && (
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {user ? (
                <li>
                  <span onClick={() => logout()}>Logout</span>
                </li>
              ) : (
                <li>
                  <a href='/auth/google'>Sign In With Google</a>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

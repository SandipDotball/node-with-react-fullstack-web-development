import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import { loadUser } from './actions/authActions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loaduser();
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={() => <h3>Home</h3>} />
            <Route exact path='/surveys' component={() => <h3>Survey</h3>} />
            <Route path='/surveys/new' component={() => <h3>New</h3>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loaduser: () => dispatch(loadUser())
});
export default connect(null, mapDispatchToProps)(App);

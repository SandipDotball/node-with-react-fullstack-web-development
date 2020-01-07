import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import { loadUser } from './actions/authActions';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import SurveyNew from './components/SurveyNew';

class App extends React.Component {
  componentDidMount() {
    this.props.loaduser();
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/surveys' component={Dashboard} />
              <Route path='/surveys/new' component={SurveyNew} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loaduser: () => dispatch(loadUser())
});
export default connect(null, mapDispatchToProps)(App);

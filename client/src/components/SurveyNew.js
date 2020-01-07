import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFromReview: false
    };
  }
  render() {
    const { showFromReview } = this.state;
    return (
      <div>
        {showFromReview ? (
          <SurveyFormReview
            onHandleBack={() => this.setState({ showFromReview: false })}
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showFromReview: true })}
          />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);

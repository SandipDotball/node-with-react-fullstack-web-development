import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitSurvey } from '../actions/surveyActions';

class SurveyFormReview extends Component {
  render() {
    const {
      surveyValues: { title, subject, body, recipients }
    } = this.props;
    return (
      <div>
        <h5>Please confirm your entries</h5>
        <div>
          <div>
            <label>Survey Title</label>
            <div className='gray-text' style={{ marginBottom: '20px' }}>
              {title}
            </div>
          </div>
          <div>
            <label>Subject Line</label>
            <div className='gray-text' style={{ marginBottom: '20px' }}>
              {subject}
            </div>
          </div>
          <div>
            <label>Email Body</label>
            <div className='gray-text' style={{ marginBottom: '20px' }}>
              {body}
            </div>
          </div>
          <div>
            <label>Recipient List</label>
            <div className='gray-text' style={{ marginBottom: '20px' }}>
              {recipients}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => this.props.onHandleBack()}
            className='btn-flat red white-text'>
            <i className='material-icons left'>chevron_left</i>
            Back
          </button>
          <button
            className='btn-flat green white-text right'
            onClick={() =>
              this.props.onHandleSurvey(
                { title, subject, body, recipients },
                this.props.history
              )
            }>
            Send Survey
            <i className='material-icons right'>email</i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateTpProps = state => ({
  surveyValues: state.form.surveyForm.values
});

const mapDispatchToProps = dispatch => ({
  onHandleSurvey: (value, history) => dispatch(submitSurvey(value, history))
});
export default connect(
  mapStateTpProps,
  mapDispatchToProps
)(withRouter(SurveyFormReview));

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validEmails from '../utilis/validEmails';

class SurveyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        <div>
          <Field
            label='Survey Title'
            name='title'
            component={SurveyField}
            type='text'
          />
          <Field
            label='Subject Line'
            name='subject'
            component={SurveyField}
            type='text'
          />
          <Field
            label='Email Body'
            name='body'
            component={SurveyField}
            type='text'
          />
          <Field
            label='Recipient List'
            name='recipients'
            component={SurveyField}
            type='text'
          />
        </div>
        <div>
          <Link to='/surveys' className='btn-flat red white-text'>
            <i className='material-icons left'>close</i>
            Cancel
          </Link>
          <button className='btn-flat blue right white-text' type='submit'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'You must be provide a title';
  }
  if (!values.subject) {
    errors.subject = 'You must be provide a Subject';
  }
  if (!values.body) {
    errors.body = 'You must be provide a Body';
  }
  errors.recipients = validEmails(values.recipients || '');
  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);

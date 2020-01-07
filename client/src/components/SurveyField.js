import React from 'react';

function SurveyField(props) {
  return (
    <div>
      <label htmlFor=''>{props.label}</label>
      <input {...props.input} />
      <div className='red-text' style={{ marginBottom: '20px' }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
}

export default SurveyField;

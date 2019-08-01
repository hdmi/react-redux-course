import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {

  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div className="ui error message">
        <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => {
    const className= `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render(){

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
      <button className="ui button primary">Submit</button>
      </form>
    );
  }


}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = 'A title must be entered';
  }

  if(!formValues.description) {
    errors.description = 'A description must be entered';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
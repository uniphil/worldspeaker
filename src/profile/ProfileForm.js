import React, { Component } from 'react';
import './ProfileForm.css';
import { Form } from 'form-mechanics';
import { formModel } from 'form-mechanics/dist/mst';

import Field from './Field';
import TextInput from './TextInput';
import Submit from './Submit';


const FormModel = formModel('ProfileForm', {
  name: {
    inputComponent: TextInput,
    required: true,
  },
});

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.model = FormModel.create();
  }

  handleSubmit = formData => {
    const { onSave } = this.props;
    onSave(formData);
  }

  render() {
    return (
      <div className="ProfileForm">
        <h1>All about you</h1>
        <Form model={this.model} onSubmit={this.handleSubmit}>
          <Field field="name">Your name: </Field>
          <Submit>Set me up!</Submit>
        </Form>
      </div>
    );
  }
}

export default ProfileForm;

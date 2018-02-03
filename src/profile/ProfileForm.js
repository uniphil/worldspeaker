import React, { Component } from 'react';
import './ProfileForm.css';
import { Form, Input } from 'form-mechanics';
import { formModel } from 'form-mechanics/dist/mst';


import TextInput from './TextInput';


const FormModel = formModel('ProfileForm', {
  name: { widget: TextInput },
})


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
          <p>
            <label htmlFor="???">Your name: </label>
            <Input field="name" />
          </p>
          <p>
            <button className="ProfileForm-button" type="submit">Submit</button>
          </p>
        </Form>
      </div>
    );
  }
}

export default ProfileForm;

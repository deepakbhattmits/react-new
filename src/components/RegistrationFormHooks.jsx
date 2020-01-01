/** @format */

import React, { useState } from 'react';

const useFormInput = () => {
  const [fields, setFields] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    // console.log('Fields : ', fields);
    if (name === 'mobileno') {
      if (/^\d+$/.test(value)) {
        setFields({ ...fields, [name]: value });
      }
    } else {
      setFields({ ...fields, [name]: value });
    }
  };
  const handleResetForm = data => {
    console.log('TEST RESET :', data);
    setFields(data);
  };
  const actions = {
    handleChange: handleChange,
    handleResetForm: handleResetForm
  };
  return [fields, actions];
};
const RegistrationFormHooks = () => {
  const [fields, actions] = useFormInput();
  // console.log('test: ',fields, actions);
  // state = {
  //     fields: {},
  //     errorMessages: {},
  // };
  const [errorMessages, setErrorMessages] = useState({});
  const submitForm = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submited : ', fields);
      // after send reset the form
      actions.handleResetForm({});
    }
  };
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!fields['username']) {
      formIsValid = false;
      errors['username'] = 'Please enter Name';
    }
    // if(typeof fields["username"] !== "undefined") {
    if (typeof fields['username'] !== 'undefined') {
      if (!fields['username'].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;

        errors['username'] = 'Please enter Alpha Character only';
      }
    }
    if (!fields['emailid']) {
      formIsValid = false;
      errors['emailid'] = 'Please enter emailid';
    }

    if (typeof fields['emailid'] !== 'undefined') {
      // regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(fields['emailid'])) {
        formIsValid = false;
        errors['emailid'] = 'Please enter valid email id ';
      }
    }

    if (!fields['mobileno']) {
      formIsValid = false;
      errors['mobileno'] = 'Please enter mobileno';
    }
    if (typeof fields['mobileno'] !== 'undefined') {
      if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors['mobileno'] = 'Please Enter digit From 0 to 9';
      }
    }
    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Please enter password';
    }
    if (typeof fields['password'] !== 'undefined') {
      var strongRegex = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      );
      if (!strongRegex.test(fields['password'])) {
        formIsValid = false;
        errors['password'] = 'please use strong password';
      }
    }
    setErrorMessages(errors);
    return formIsValid;
  };
  return (
    <div>
      <div id='register' className='register-form'>
        <h1>Hooks</h1>
        <form method='post' name='userRegistrationForm' onSubmit={submitForm}>
          <label htmlFor='username'>Name</label>
          <input
            type='text'
            id='username'
            name='username'
            onChange={actions.handleChange}
            value={fields.username || ''}
          />
          <div className='errorMsg'>{errorMessages.username}</div>
          <label htmlFor='emailid'>Email ID:</label>
          <input
            type='text'
            id='emailid'
            name='emailid'
            onChange={actions.handleChange}
            value={fields.emailid || ''}
          />
          <div className='errorMsg'>{errorMessages.emailid}</div>
          <label htmlFor='mobileno'>Mobile No:</label>
          <input
            type='text'
            id='mobileno'
            name='mobileno'
            onChange={actions.handleChange}
            value={fields.mobileno || ''}
          />
          <div className='errorMsg'>{errorMessages.mobileno}</div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={actions.handleChange}
            value={fields.password || ''}
          />
          <div className='errorMsg'>{errorMessages.password}</div>
          <input type='submit' className='button' value='Register' />
        </form>
      </div>
    </div>
  );
};
// const mapStatetoProps = (state) => {
//     return {
//         auth: state.auth
//     }
// }
// export default connect(mapStatetoProps, null)(RegistrationForm);
export default RegistrationFormHooks;

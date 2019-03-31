import React, { Component } from 'react';

class RegistrationForm extends Component {
    state = {fields:{},errorMessages:{}};
    handleChange = (e) => {
        let fields = this.state.fields
        console.log('change in ',e.target.name)
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });   
    }
    submitForm = (e) => {
        e.preventDefault();
        if(this.validateForm()) {
            console.log('Form Submited',this.state.fields);
        }
    }
    validateForm = () => {
        let fields = this.state.fields; 
        let errors = {};
        let formIsValid = true;
        if(!fields['username']) {
            formIsValid = false
           errors["username"] = 'Please enter Name'
        }
        // if(typeof fields["username"] !== "undefined") {
        if(typeof fields['username'] !== 'undefined') {
            if(!fields['username'].match(/^[a-zA-Z]*$/)) {
                formIsValid = false

           errors["username"] = 'Please enter Alpha Character only'
            }

        }
        if(!fields['emailid']) {
            formIsValid = false
           errors['emailid'] = 'Please enter emailid'
        }
        
        if(typeof fields['emailid'] !== 'undefined') { 
            // regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
          if(!pattern.test(fields['emailid'])) {
                formIsValid = false
                errors['emailid'] = 'Please enter valid email id '
            }
        }

        if(!fields['mobileno']) {
            formIsValid = false
           errors['mobileno'] = 'Please enter mobileno'
        }
        if(typeof fields['mobileno'] !== 'undefined') {
            if(!fields['mobileno'].match(/^[0-9]{10}$/)) {
                formIsValid = false
                errors['mobileno'] = 'Please Enter digit From 0 to 9'
            }
        }
        if(!fields['password']) {
            formIsValid = false
           errors['password'] = 'Please enter password'
        }
        if(typeof fields['password'] !== 'undefined') {    
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
            if(!strongRegex.test(fields['password'])) {
                formIsValid = false
                errors['password'] = 'please use strong password'
            }
        }
        this.setState({errorMessages: errors})
        return formIsValid;
    }
    render (){
        return (
            <div>
                <div id="register" className="register-form">
                <h3>Registration page</h3>
                <form method="post"  name="userRegistrationForm" onSubmit={this.submitForm} >
                    <label htmlFor="username">Name</label>
                    <input type="text" id='username' name="username" onChange={this.handleChange} value={this.state.fields.username || ''} />
                    <div className="errorMsg">{ this.state.errorMessages.username }</div>
                    <label htmlFor="emailid">Email ID:</label>
                    <input type="text" id="emailid" name="emailid"  onChange={this.handleChange} value={this.state.fields.emailid || ''} />
                    <div className="errorMsg">{ this.state.errorMessages.emailid }</div>
                    <label  htmlFor="mobileno">Mobile No:</label>
                    <input type="text" id="mobileno" name="mobileno"  onChange={this.handleChange} value={this.state.fields.mobileno || ''} />
                    <div className="errorMsg">{ this.state.errorMessages.mobileno }</div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.fields.password || ''} />
                    <div className="errorMsg">{ this.state.errorMessages.password }</div>
                    <input type="submit" className="button"  value="Register"/>
                </form>
    </div>
            </div>
        );
    }
}
export default RegistrationForm;
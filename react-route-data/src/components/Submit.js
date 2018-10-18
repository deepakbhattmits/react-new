import React, { Component } from "react";
import $ from "jquery";
class Submit extends Component {
	    constructor(props) {
    super(props);
	this.editRow = this.editRow.bind(this);
	this.deleteRow = this.deleteRow.bind(this);
	this.updateSave = this.updateSave.bind(this);
	this.state = {
					FirstName: '',
					LastName: '',
					HomeTown: '',
					Job: '',
					Age: '',
					UserName: '',
					data : [],
					selectedData : [],
					msg: '',
				};
	this.changeHandler = this.changeHandler.bind(this);
	this.submitHandler = this.submitHandler.bind(this);

  }
  submitHandler(e) {
		var form_data = {
			FirstName: this.state.FirstName,
			LastName: this.state.LastName,
			HomeTown: this.state.HomeTown,
			Job: this.state.Job,
			Age: this.state.Age,
			UserName: this.state.UserName,
			statusType: 'active',
			check: false,
			qryType: "INSERT"
		}
    $.ajax({
        url: "http://localhost/react-new-local/api/submit.php",
        type : "POST",

        data : form_data,
		dataType:'json',
        success : function(response) {


			this.setState({msg : response["success"]})
		 document.form1.reset();
        }.bind(this),
        error: function(xhr, resp, text){
            console.log(xhr, resp, text);
        }
    });

		 e.preventDefault();

      }
  changeHandler(e){


		if(e.target.name !== 'check')
			this.setState({ [e.target.name]: e.target.value });
		else if(e.target.name === 'check' && e.target.checked)
			this.setState({ [e.target.name]: e.target.value });
		else
			this.setState({ [e.target.name]: e.target.checked });

      }
  editRow(){
		console.log("TEST-edit");
		this.updateSave();
		 $(this).each(function( key, value) {
			console.log(key,'------',value);
			console.log("Selected UN: ",value["state"]["value"]);
			console.log("Selected DATA: ",value["state"]["selectedData"]);
		 });
  }
  updateSave() {
	  /*console.log("TEST");
	   $(this).each(function( key, value) {
		 console.log(key,'------',value);
	  console.log("Selected : ",value["state"]["value"]);
	 }); */

	$(this).each(function( key, value) {
		// console.log(key,'------',value);
		// console.log("Selected : ",value["state"]["value"]);
		var edit_form_data = {
			selected: value["state"]["selectedData"],
			qryType: "EDIT"
		}
// console.log("Selected data value: ",edit_form_data);
    $.ajax({
        url: "http://localhost/react-new-local/api/editStudent.php",
        type : "POST",
        data : edit_form_data,
				dataType:'json',
        success : function(response) {


				this.setState({msg : response["success"]})

          // empty form
					this.setState({check: false});


					document.form1.reset();

        }.bind(this),
        error: function(xhr, resp, text){

            console.log(xhr, resp, text);
        }
    });
});
  }
  deleteRow(){
	   this.setState({ open: false });
	    $(this).each(function( key, value) {
		//console.log(key,'------',value);
		console.log("Selected : ",value["state"]["value"]);

	});

  }
  render() {
    return (
      <React.Fragment>
	  	<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<div className="form-box">
					<form className="form" onSubmit={this.submitHandler} ref="form" name="form1">
					<div className="row">
							<div className="col-sm-12">
								<h1>Registration Form</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<label htmlFor="FirstName">Enter First Name</label>
								<input className="form-control" id="FirstName" name="FirstName" type="text" onChange={this.changeHandler}/>
							</div>
							<div className="col-sm-6">
								<label htmlFor="LastName">Enter Last Name</label>
								<input className="form-control" id="LastName" name="LastName" type="text" onChange={this.changeHandler}/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<label htmlFor="HomeTown">Enter Hometown</label>
								<input className="form-control" id="HomeTown" name="HomeTown" type="text" onChange={this.changeHandler}/>
							</div>
							<div className="col-sm-6">
								<label htmlFor="Job">Enter Job</label>
								<input className="form-control" id="Job" name="Job" type="text" onChange={this.changeHandler}/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<label htmlFor="Age">Enter Age</label>
								<input className="form-control" id="Age" name="Age" type="text" onChange={this.changeHandler}/>
							</div>
							<div className="col-sm-6">
								<label htmlFor="Age">Enter UserName</label>
								<input className="form-control" id="UserName" name="UserName" type="text" onChange={this.changeHandler}/>
							</div>
						</div>
						<div className="row ">

							<div className="col-sm-6">
								<div className="checkbox">

									<label><input id="check" name="check" type="checkbox" disabled = { this.state.FirstName === '' || this.state.LastName === '' || this.state.HomeTown === '' || this.state.Job === '' || this.state.Age === '' || this.state.UserName === '' } onChange={this.changeHandler} /> Terms and Condition </label>
								</div>
							</div>
							<div className="col-sm-6">

								<button className="btn btn-primary btn btn-primary btn-form display-4" disabled = { this.state.FirstName === '' || this.state.LastName === '' || this.state.HomeTown === '' || this.state.Job === '' || this.state.Age === '' || this.state.UserName === '' || this.state.check === false }>Register Me</button>
							</div>
						</div>
						<div className="row text-center msg-div">

						</div>
						<p>{ this.state.msg }</p>

					</form>
					<div className="row">
						<button className="btn btn-primary btn btn-primary btn-form display-4">Already Register Login !</button>
					</div>
				</div>
				</div>
			</div>
		</div>
      </React.Fragment>
    );
  }
}

export default Submit;

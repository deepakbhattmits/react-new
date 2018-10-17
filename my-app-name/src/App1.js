import React, { Component } from 'react';

import logo1 from './img/sprite-steps.png';
import './css/App.css';
import ReactTable from "react-table";
import $ from "jquery";
import 'react-table/react-table.css';



import 'bootstrap/dist/css/bootstrap.min.css';
class App1 extends Component {
  constructor(props) {
    super(props);
	this.getPHP = this.getPHP.bind(this);
	this.editRow = this.editRow.bind(this);
	this.deleteRow = this.deleteRow.bind(this); 
	this.updateSave = this.updateSave.bind(this); 
	this.state = { data : [] };
	this.state = { selectedData : [] };	
	
	this.state = {
					FirstName: '',
					LastName: '',
					HomeTown: '',
					Job: '',
					Age: '',
					UserName: '',
					check: false
				};	
	this.state = {
		options: [],
		value: '',
	};
	$.ajax({
		url: "http://localhost/reactDb/api/data.php",
		type : "POST",
		dataType:'json',
		success : function(response) {
			
		this.setState({ options : response })
		this.setState({ check: false});		
		}.bind(this),
		error: function(xhr, resp, text){
			console.log(xhr, resp, text);
		}
	});
	this.changeHandler = this.changeHandler.bind(this);
	this.submitHandler = this.submitHandler.bind(this);

  }
  
changeHandler(e){
		
		
		if(e.target.name !== 'check')
			this.setState({ [e.target.name]: e.target.value });
		else if(e.target.name === 'check' && e.target.checked) 
			this.setState({ [e.target.name]: e.target.value });
		else 
			this.setState({ [e.target.name]: e.target.checked });
		
      }
submitHandler(e) {
		var form_data = { 
			FirstName: this.state.FirstName,
			LastName: this.state.LastName,
			HomeTown: this.state.HomeTown,
			Job: this.state.Job,
			Age: this.state.Age,
			UserName: this.state.UserName,
			check: this.state.check,
			qryType: "INSERT" 
		}		 
    $.ajax({
        url: "http://localhost/reactDb/api/submit.php",
        type : "POST",
       
        data : form_data,
		dataType:'json',
        success : function(response) {
	
		if(response.sucess) {
			$(".msg-div").html("<h5 class='msg'>"+response.sucess+"</h5>").fadeIn().delay(1000).fadeOut("slow");
		}else if(response.error) {
			$(".msg-div").html("<h5 class='msg'>"+response.error+"</h5>").fadeIn().delay(1000).fadeOut("slow");
		}
 
            // empty form			
			this.setState({check: false});
			
			this.refs.form.reset();
 
        }.bind(this),
        error: function(xhr, resp, text){
      
            console.log(xhr, resp, text);
        }
    });
	
		 e.preventDefault();

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
		 console.log(key,'------',value);
		console.log("Selected : ",value["state"]["value"]);
		var edit_form_data = { 
			selected: value["state"]["selectedData"],
			qryType: "EDIT" 
		}	
// console.log("Selected data value: ",edit_form_data);		
    $.ajax({
        url: "http://localhost/reactDb/api/editStudent.php",
        type : "POST",
       
        data : edit_form_data,
		dataType:'json',
        success : function(response) {
	
		if(response.sucess) {
			$(".msg-div").html("<h5 class='msg'>"+response.sucess+"</h5>").fadeIn().delay(1000).fadeOut("slow");
		}else if(response.error) {
			$(".msg-div").html("<h5 class='msg'>"+response.error+"</h5>").fadeIn().delay(1000).fadeOut("slow");
		}
 
            // empty form			
			this.setState({check: false});
			
			this.refs.form.reset();
 
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
 getPHP(){
      $.ajax({
        url: "http://localhost/reactDb/api/data.php",
        type : "POST",
		dataType:'json',
        success : function(response) {
		
		this.setState({ data : response });			
        }.bind(this),
        error: function(xhr, resp, text){
            console.log(xhr, resp, text);
        }
    });
	
  }
   handleChange = (event) => {

   this.setState({ value: event.target.value });		
   var search_data = { 
			UserName: event.target.value,
			qryType: "SEARCH" 
		}
   $.ajax({
        url: "http://localhost/reactDb/api/recordSearch.php",
        type : "POST",
		dataType:'json',
		data : search_data,
        success : function(response) {
		console.log("test selected student data : ",response);	
		this.setState({ selectedData : response });
			
        
        }.bind(this),
        error: function(xhr, resp, text){
            console.log(xhr, resp, text);
        }
    });
   
  };
  render() {
	const { options, value } = this.state;

	  const columns = [
			{
				Header: 'ID',
				accessor:  'id' // String-based value accessors!
			},
			{
				Header: 'First Name',
				accessor:  'FirstName' // String-based value accessors!
			},
			{
				Header: 'Last Name',
				accessor: 'LastName' // String-based value accessors!
			},
			{
				Header: 'Hometown',
				accessor: 'HomeTown' // String-based value accessors!
			},
			{
				Header: 'Designation',
				accessor: 'Job' // String-based value accessors!
			},
			{
				Header: 'Age',
				accessor: 'Age' // String-based value accessors!
			},
			{
				Header: 'UserName',
				accessor: 'UserName' // String-based value accessors!
			},
			{
				Header: 'Action',
				Cell: props => <div>&nbsp;<button  onClick={()=>this.editRow(this)}>Edit</button>&nbsp;&nbsp;<button  onClick={()=>this.deleteRow(this)}>Delete</button>&nbsp;</div>				
			}
		]
    return (
		<div className="container">
			<div className="row">
					<h3>Spirte Image </h3>
					<img src={logo1} className="App-logo-dynamic" alt="logo1" />
					<h3>single image with animation </h3>
					<div className="hi"></div>

			</div>
			<div className="row">
				
				<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<div className="form-box">
					<form className="form" onSubmit={this.submitHandler} ref="form">
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
						
					</form>
					<div className="row">
						<button className="btn btn-primary btn btn-primary btn-form display-4">Already Register Login !</button>
					</div>
				</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-lg-1 col-sm-1 col-md-1 col-xs-4">
					<button className="btn btn-primary" color="danger" onLoad={ this.getPHP } onClick={ this.getPHP }>Load Data</button>
				</div>
				<div className="col-lg-11 col-sm-11 col-md-11 col-xs-8 text-center">
					<span className="fa-spiner fa-spin h3 ">STUDENT RECORD</span>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
					<ReactTable data={ this.state.data } style={{ textTransform: 'uppercase' }} columns={ columns }  />
				</div>
			</div>
			
			<div className="row">
				<div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
					
						<select className="customSelect" onChange={this.handleChange} value={value}>
						  {options.map(item => (
							<option key={item.UserName} value={item.UserName}>
							  {item.UserName}
							</option>
						  ))}
						</select>
					
				</div>
				<div className="col-lg-9 col-sm-9 col-md-9 col-xs-12">
					<span className="h3">Select Student is : { value }</span>
					<ReactTable data={ this.state.selectedData } style={{ textTransform: 'uppercase' }} columns={ columns }  />
				</div>
			</div>
			<div className="row">
						
			</div>
		</div>
    );
  }
}

export default App1
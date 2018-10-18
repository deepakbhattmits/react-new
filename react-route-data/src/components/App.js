import React, { Component } from 'react';

import ReactTable from "react-table";

import Modal from 'react-responsive-modal';

import $ from "jquery";
import 'react-table/react-table.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props);
	this.getPHP = this.getPHP.bind(this);
	this.deleteRow = this.deleteRow.bind(this);
  this.inputHandleChange = this.inputHandleChange.bind(this);
  this.inputHandleChangeFirstName = this.inputHandleChangeFirstName.bind(this);
  this.inputHandleChangeLastName = this.inputHandleChangeLastName.bind(this);
  this.inputHandleChangeHomeTown = this.inputHandleChangeHomeTown.bind(this);
  this.inputHandleChangeJob = this.inputHandleChangeJob.bind(this);
  this.inputHandleChangeAge = this.inputHandleChangeAge.bind(this);
  this.inputHandleChangeUserName = this.inputHandleChangeUserName.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
        open: false
		   };

  }
  inputHandleChange(event) {
      // this.setState({value: event.target.value});
      console.log('A name was edited: ', event.target.value);
  }
  inputHandleChangeFirstName (event) {
// console.log("FirstName : ",event.target.value);
    this.setState({
      FirstName : event.target.value
    })
  }
  inputHandleChangeLastName (event) {
    this.setState({
      LastName : event.target.value
    })
  }
  inputHandleChangeHomeTown (event) {
    this.setState({
      HomeTown : event.target.value
    })
  }
  inputHandleChangeJob (event) {
    this.setState({
      Job : event.target.value
    })
  }
  inputHandleChangeAge (event) {
    this.setState({
      Age : event.target.value
    })
    }
  inputHandleChangeUserName (event) {
    this.setState({
      UserName : event.target.value
    })
  }
  handleSubmit(event) {
  event.preventDefault();
    let edited_data = {
      FirstName : event.target.FirstName.value,
      LastName  : event.target.LastName.value,
      HomeTown  : event.target.HomeTown.value,
      Job       : event.target.Job.value,
      Age       : event.target.Age.value,
      UserName  : event.target.UserName.value,
  		statusType: 'active',
      qryType   : "EDIT"
    }
    // console.log("EDITED DATA : ",edited_data);

    $.ajax({
         url: "http://localhost/react-new-local/api/recordEdit.php",
         type : "POST",
       		dataType:'json',
       		data : edited_data,
         success : function(response) {
 	        this.getPHP();
          this.setState({
            msg : response["success"]
          })



             }.bind(this),
         error: function(xhr, resp, text){

           // this.setState({
           //   msg : resp["error"]
           // })
             console.log(xhr, resp, text);
         }
     });



  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.setState({
      msg : ''
    })
  };
     handleChange = (event) => {
       this.onOpenModal();
      // console.log("home page select row : ",event);

   this.setState({ value: event["UserName"] });
   var search_data = {
			UserName: event["UserName"],
			qryType: "SEARCH"
		}
    // console.log("home page select Username : ",search_data);
   $.ajax({
        url: "http://localhost/react-new-local/api/recordSearch.php",
        type : "POST",
		dataType:'json',
		data : search_data,
        success : function(response) {
	        // console.log("test selected student data : ",response);
          this.setState({ selectedData : response });
          // console.log("KAT GYA : ", this.state.selectedData);
          if( this.state.selectedData ) {
            // console.log("length :",this.state.selectedData.length);
            for (let i = 0; i < this.state.selectedData.length; i++) {
              // console.log("simple DATA :",this.state.selectedData[i]["FirstName"]);
                this.setState({
                  FirstName : this.state.selectedData[i]["FirstName"] ,
                  LastName : this.state.selectedData[i]["LastName"] ,
                  HomeTown : this.state.selectedData[i]["HomeTown"] ,
                  Job : this.state.selectedData[i]["Job"] ,
                  Age : this.state.selectedData[i]["Age"] ,
                  UserName : this.state.selectedData[i]["UserName"]
              })
                // console.log("new DATA :",this.state.FirstName,"-",this.state.LastName,"-",this.state.HomeTown,"-",this.state.Job,"-",this.state.Age,"-",this.state.UserName);


            }
          }

        }.bind(this),
        error: function(xhr, resp, text){
            console.log(xhr, resp, text);
        }
    });
  };

  deleteRow(event){
	 // console.log("WANT DELETE : ",event["UserName"]);
   let delete_data = {
     UserName : event["UserName"],
     statusType: "deactive",
     qryType: "DELETE"
   }
   $.ajax({
       url: "http://localhost/react-new-local/api/recordDelete.php",
       type : "POST",
       dataType:'json',
       data: delete_data,
       success : function(response) {
         this.setState({
           msg : response["success"]
         })
         this.getPHP();

       }.bind(this),
       error: function(xhr, resp, text){
           console.log(xhr, resp, text);
       }
   });
  }

 getPHP(){
      $.ajax({
        url: "http://localhost/react-new-local/api/data.php",
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
  render() {


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
				Cell: props => <div>&nbsp;<button  onClick={ (e) => {    this.handleChange(props.original);  }}>Edit</button>&nbsp;&nbsp;<button  onClick={ (e) => {   this.deleteRow(props.original);  }} >Delete</button>&nbsp;</div>
      }
		]
    return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-2 col-sm-2 col-md-2 col-xs-4">
					<button className="btn btn-primary" color="danger" onLoad={ this.getPHP } onClick={ this.getPHP }>Load Data</button>
				</div>
				<div className="col-lg-10 col-sm-10 col-md-10 col-xs-8 text-center">
					<span className="fa-spiner fa-spin h2 ">STUDENT RECORD</span>
        	<span className="h2 ">{ this.state.msg } </span>
				</div>
			</div>
			<div className="row">
			<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
				<ReactTable data={ this.state.data } style={{ textTransform: 'uppercase' }} columns={ columns }  defaultPageSize={ 5 }  />
			</div>
			</div>

      <div className="row">
			<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
          <Modal open={ this.state.open } onClose={this.onCloseModal}>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-2" name="fname">First Name :</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="fname"  name="FirstName" value={this.state.FirstName} onChange={this.inputHandleChangeFirstName.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" name="lname">Last Name :</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="lname"  name="LastName" value={this.state.LastName} onChange={this.inputHandleChangeLastName.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
          </div>
          <div className="form-group">
               <label className="control-label col-sm-2" name="htown">Home Town:</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="htown"  name="HomeTown" value={this.state.HomeTown} onChange={this.inputHandleChangeHomeTown.bind(this)} ref={node => (this.inputNode = node)} />
               </div>
           </div>
             <div className="form-group">
               <label className="control-label col-sm-2" name="job">job :</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="job" name="Job" value={this.state.Job} onChange={this.inputHandleChangeJob.bind(this)} ref={node => (this.inputNode = node)} />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="age">Age :</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="age"  name="Age" value={this.state.Age} onChange={this.inputHandleChangeAge.bind(this)} ref={node => (this.inputNode = node)} />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2"  htmlFor="uname">User Name :</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="uname" name="UserName" value={this.state.UserName} onChange={this.inputHandleChangeUserName.bind(this)} ref={node => (this.inputNode = node)} />
               </div>
             </div>
             <div className="form-group">
              <div className="col-sm-6 col-xs-6"><input type="submit" value="Submit"/></div>
              <div className="col-sm-6 col-xs-6"><input type="reset" onClick={this.onCloseModal} value="Cancle"/></div>
             </div>
             <div className="form-group">
              <span className="h2">
                { this.state.msg }
              </span>
             </div>
          </form>
          </Modal>
      </div>
			</div>
		</div>
    );
  }
}

export default App

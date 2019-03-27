import React, { Component } from "react";
// import ReactTable from "react-table";

import Modal from 'react-responsive-modal';

import $ from "jquery";
// import 'react-table/react-table.css';

class Search extends Component {
	  constructor(props) {
    super(props);
	this.editRow = this.editRow.bind(this);
	this.deleteRow = this.deleteRow.bind(this);
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
					msg: '',
					selectedData : '',
					// selectedData1 : [],
					check: false,
					options: [],
					value: '',
					open: false,
					statusType : 'active',
				};

	// $.ajax({
	// 	url: "http://localhost/react-new-local/api/data.php",
	// 	type : "POST",
	// 	dataType:'json',
	// 	data: this.state.statusType,
	// 	success : function(response) {

	// 	this.setState({ options : response })
	// 	// this.setState({ check: false});
	// 	}.bind(this),
	// 	error: function(xhr, resp, text){
	// 		// console.log(xhr, resp, text);
	// 	}
	// });
	}
	componentDidMount() {
		fetch('http://starlord.hackerearth.com/movies',)
		.then(response => response.json())
		
		.then((json) => {
	 console.log('pre test : ',json);             
			this.setState({ options : json });
			// console.log(this.state.selectedData);
 
		}).catch(function(error) {
			console.log("error:", error);
});
}


	// inputHandleChange(event) {
  //     // this.setState({value: event.target.value});
  //     console.log('A name was edited: ', event.target.value);
  // }
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
 	        this.getData();
          this.setState({
            msg : response["success"]
          })



             }.bind(this),
         error: function(xhr, resp, text){

           // this.setState({
           //   msg : resp["error"]
           // })
            // console.log(xhr, resp, text);
         }
     });
  }
  onOpenModal = () => {
    this.setState({ open: true });
  }
  onCloseModal = () => {
    this.setState({ open: false });
		this.getData();
    this.setState({
      msg : ''
    })
  }
	editRow(event){
		// console.log("TEST-edit",event["FirstName"]);
		this.onOpenModal();
		this.setState({
						FirstName	: event["FirstName"],
						LastName	: event["LastName"],
						HomeTown	: event["HomeTown"],
						Job				: event["Job"],
						Age				: event["Age"],
						UserName	: event["UserName"]
					})
  }
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
					this.setState({ value : '' });
					// this.setState({ selectedData : response["success"] });

					// this.handleChange();
					this.getData();


				}.bind(this),
				error: function(xhr, resp, text){
						// console.log(xhr, resp, text);
				}
		});
  }
 	handleChange = (event) => {
	 this.setState({ value: event.target.value });
	 // console.log("test selected student data : ", event.target.value);
   var search_data = {
		movie_title: event.target.value,
		}
		console.log('get the value :',this.state.options);
		for (var i=0;i<this.state.options.length;i++) {
			if(search_data['movie_title'] === this.state.options[i]['movie_title']) {
					console.log("search row : ",this.state.options[i]);
				 this.setState({ selectedData : this.state.options[i] });
				 // var resp = JSON.parse(this.state.options[i]);
				 // console.log("TEST : ",resp);
				 // this.setState({ selectedData1 : this.state.options[i] })
				 
			}
		}		
  }
	getData(){
		fetch('http://starlord.hackerearth.com/movies',)
		.then(response => response.json())
		
		.then((json) => {
	 console.log('pre test : ',json, "TEST : ",json.data);             
			
			this.setState({ options : json })
 
		}).catch(function(error) {
			console.log("error:", error);
});
   }
  render() {
		// console.log("asdsa ",this.state.selectedData);
	  const { options, value } = this.state;
	  // const columns = [
		// 	{
		// 		Header: 'ID',
		// 		accessor:  'id' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'First Name',
		// 		accessor:  'FirstName' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Last Name',
		// 		accessor: 'LastName' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Hometown',
		// 		accessor: 'HomeTown' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Designation',
		// 		accessor: 'Job' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Age',
		// 		accessor: 'Age' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'UserName',
		// 		accessor: 'UserName' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Action',
		// 		Cell: props => <div>&nbsp;<button  onClick={ (e) => { this.editRow(props.original); }}>Edit</button>&nbsp;&nbsp;<button  onClick={ (e) => {   this.deleteRow(props.original);  }} >Delete</button>&nbsp;</div>
    //   }
		// ]

		// const columns = [
		// 	{
		// 		Header: 'Director Name',
		// 		accessor:  'director_name' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Movie Title',
		// 		accessor:  'movie_title' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Country',
		// 		accessor: 'country' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Plot Keywords',
		// 		accessor: 'plot_keywords' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Title Year',
		// 		accessor: 'title_year' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Content Rating',
		// 		accessor: 'content_rating' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Action',
		// 		Cell: props => <div>&nbsp;<button  onClick={ (e) => {    this.handleChange(props.original);  }}>Edit</button>&nbsp;&nbsp;<button  onClick={ (e) => {   this.deleteRow(props.original);  }} >Delete</button>&nbsp;</div>
		// 	}
		// ]
    return (
      <React.Fragment>
	  	<div className="container-fluid">
			<div className="row">
				<div className="col-lg-2 col-sm-2 col-md-2 col-xs-12">

						<select className="customSelect" onChange={this.handleChange} value={value}>
						  {options.map((item, index) => (
							<option key={index} value={item.movie_title}>
							  {item.movie_title}
							</option>
						  ))}
						</select>

				</div>
				<div className="col-lg-10 col-sm-10 col-md-10 col-xs-12">
					<span className="h3">Select Student is : { value }</span>
					<span className="h2">{ this.state.msg }</span>
					{/* <ReactTable data={ this.state.selectedData1 } style={{ textTransform: 'uppercase' }} columns={ columns }   defaultPageSize={ 5 } /> */}

<div className= "table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Director Name</th>
								<th>Movie Title</th>
								<th>Country</th>
								<th>Plot Keywords</th>
								<th>Title Year</th>
								<th>Content Rating</th>
								
							</tr>
						</thead>
					<tbody>
					{this.state.selectedData ? 
							<tr >
								<td>{this.state.selectedData.director_name}</td>
								<td>{this.state.selectedData.movie_title}</td>
								<td>{this.state.selectedData.country}</td>
								<td>{this.state.selectedData.plot_keywords}</td>
								<td>{this.state.selectedData.title_year}</td>
								<td>{this.state.selectedData.content_rating}</td>
							</tr>
						: 
							<tr>
								<td colSpan="7" align="center">--NO DATA SELECTED--</td>
							</tr>
					}
					</tbody>
       </table>
			 </div>
				</div>
			</div>
			<div className="row">
			<Modal open={ this.state.open } onClose={this.onCloseModal}>
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
			<div className="form-group">
				<label className="control-label col-sm-12" name="fname">UserName :
					<input type="text" className="border-0" id="username"  name="UserName" value={this.state.UserName} onChange={this.inputHandleChangeAge.bind(this)} ref={node => (this.inputNode = node)} readOnly/>
				</label>
			</div>
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
					<div className="col-sm-6 col-xs-6"><input type="submit" value="Submit"/></div>
					<div className="col-sm-6 col-xs-6"><input type="reset" onClick={this.onCloseModal} value="Cancel"/></div>
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
      </React.Fragment>
    );
  }
}

export default Search;

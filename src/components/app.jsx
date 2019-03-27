import React, { Component } from 'react';

import ReactTable from "react-table";

// import $ from "jquery";

import Modal from 'react-responsive-modal';

import 'react-table/react-table.css';




function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class App extends Component {
  constructor(props) {
  super(props);
	this.getData = this.getData.bind(this);
	this.deleteRow = this.deleteRow.bind(this);
  this.inputHandleChange = this.inputHandleChange.bind(this);
  this.inputHandleChangename = this.inputHandleChangename.bind(this);
  this.inputHandleChangegender = this.inputHandleChangegender.bind(this);
//   this.inputHandleChangecreate_date = this.inputHandleChangecreate_date.bind(this);
  this.inputHandleChangephone = this.inputHandleChangephone.bind(this);
  this.inputHandleChangeemail = this.inputHandleChangeemail.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleToggleClick = this.handleToggleClick.bind(this);
	this.state = {
        _id: '',
        name: '',
        gender: '',
        email: '',
        create_date: '',
        phone: '',
        data : [],
        selectedData : [],
        msg: '',
        open: false,
        showWarning: true
		   };

  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  inputHandleChange(event) {
      // this.setState({value: event.target.value});
      // console.log('A name was edited: ', event.target.value);
  }
  inputHandleChangename (event) {
 console.log("name : ",event.target.value);
    this.setState({
      name : event.target.value
    })
  }
  inputHandleChangeemail (event) {
        this.setState({
          email : event.target.value
        })
      }
  inputHandleChangegender (event) {
    this.setState({
      gender : event.target.value
    })
  }
//   inputHandleChangecreate_date (event) {
//     this.setState({
//       create_date : event.target.value
//     })
//   }
  inputHandleChangephone (event) {
    this.setState({
      phone : event.target.value
    })
    }

  handleSubmit(event) {
  event.preventDefault();
    // let edited_data = {
    //     name        : event.target.name.value,
    //     gender      : event.target.gender.value,
    //     // create_date : event.target.create_date.value,
    //     Mobile      : event.target.phone.value,
    //     email       : event.target.email.value,
    //     // statusType  : 'active',
    //     // qryType     : "EDIT"
    // } 
    this.setState({ 
      name        : event.target.name.value,
      gender      : event.target.gender.value,
      Mobile      : event.target.phone.value,
      email       : event.target.email.value
    });
   console.log("TEST : ", this.state._id );
   fetch('http://localhost:8080/api/contacts/:'+this.state._id, {
    method: 'put', 
    body: JSON.stringify(this.state), 
    headers:{
  
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
   //  console.log("EDITED DATA : ",edited_data);

    // $.ajax({
    //      url: "http://localhost/react-new-local/api/recordEdit.php",
    //      type : "POST",
    //    		dataType:'json',
    //    		data : edited_data,
    //      success : function(response) {
 	//         this.getData();
    //       this.setState({
    //         msg : response["success"]
    //       })



    //          }.bind(this),
    //      error: function(xhr, resp, text){

    //        // this.setState({
    //        //   msg : resp["error"]
    //        // })
    //          // console.log(xhr, resp, text);
    //      }
    //  });



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
       console.log("home page select row : ",event);
       // console.log("type :",event);
            //for (let i = 0; i < event.length; i++) {
              // console.log("simple DATA :",this.state.selectedData[i]["name"]);
                this.setState({
                    _id          : event["_id"],
                    name        : event["name"] ,
                    email       : event["email"] ,
                    phone       : event["phone"] ,
                    gender      : event["gender"] ,
                    create_date : event["create_date"]
              })
                // console.log("new DATA :",this.state.name,"-",this.state.Lastname,"-",this.state.gender,"-",this.state.create_date,"-",this.state.Age,"-",this.state.Username);


            //}
       

   this.setState({ value: event["Username"] });
  //  var search_data = {
	// 		Username: event["Username"],
	// 		qryType: "SEARCH"
	// 	}
    // console.log("home page select Username : ",search_data);
//    $.ajax({
//         url: "http://localhost/react-new-local/api/recordSearch.php",
//         type : "POST",
// 		dataType:'json',
// 		data : search_data,
//         success : function(response) {
// 	        // console.log("test selected student data : ",response);
//           this.setState({ selectedData : response });
//           // console.log("KAT GYA : ", this.state.selectedData);
//           if( this.state.selectedData ) {
//             // console.log("length :",this.state.selectedData.length);
//             for (let i = 0; i < this.state.selectedData.length; i++) {
//               // console.log("simple DATA :",this.state.selectedData[i]["name"]);
//                 this.setState({
//                   name : this.state.selectedData[i]["name"] ,
//                   Lastname : this.state.selectedData[i]["Lastname"] ,
//                   gender : this.state.selectedData[i]["gender"] ,
//                   create_date : this.state.selectedData[i]["create_date"] ,
//                   Age : this.state.selectedData[i]["Age"] ,
//                   Username : this.state.selectedData[i]["Username"]
//               })
//                 // console.log("new DATA :",this.state.name,"-",this.state.Lastname,"-",this.state.gender,"-",this.state.create_date,"-",this.state.Age,"-",this.state.Username);


//             }
//           }

//         }.bind(this),
//         error: function(xhr, resp, text){
//             // console.log(xhr, resp, text);
//         }
//     });
  };

  deleteRow(event){
	 // console.log("WANT DELETE : ",event["Username"]);
  //  let delete_data = {
  //    Username : event["Username"],
  //    statusType: "deactive",
  //    qryType: "DELETE"
  //  }
//    $.ajax({
//        url: "http://localhost/react-new-local/api/recordDelete.php",
//        type : "POST",
//        dataType:'json',
//        data: delete_data,
//        success : function(response) {
//          this.setState({
//            msg : response["success"]
//          })
//          this.getData();

//        }.bind(this),
//        error: function(xhr, resp, text){
//            // console.log(xhr, resp, text);
//        }
//    });
  }

 getData(){
    // fetch('http://localhost:8080/api/contacts',)
    fetch('http://starlord.hackerearth.com/movies',)
          .then(response => response.json())
          
          .then((json) => {
         console.log('pre test : ',json, "TEST : ",json.data);             
            this.setState({ data : json });
       
          }).catch(function(error) {
            console.log("error:", error);
      });




        // fetch('http://localhost:8080/api/contacts', {
        //   method: 'POST', // or 'PUT'
        //   body: JSON.stringify(data), // data can be `string` or {object}!
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // }).then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response))
        // this.setState({ data : json.data })
        
        // )
        // .catch(error => console.error('Error:', error));

  }

  render() {
    
    //    const columns = [
		// 	{
		// 		Header: 'Created Date',
		// 		accessor:  'create_date' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'name',
		// 		accessor:  'name' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'email',
		// 		accessor: 'email' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Mobile',
		// 		accessor: 'phone' // String-based value accessors!
    //         },
    //         {
		// 		Header: 'gender',
		// 		accessor: 'gender' // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Action',
		// 		Cell: props => <div>&nbsp;<button  onClick={ (e) => {    this.handleChange(props.original);  }}>Edit</button>&nbsp;&nbsp;<button  onClick={ (e) => {   this.deleteRow(props.original);  }} >Delete</button>&nbsp;</div>
    //   }
    // ]


    const columns = [
      	{
      		Header: 'Director Name',
      		accessor:  'director_name' // String-based value accessors!
      	},
      	{
      		Header: 'Movie Title',
      		accessor:  'movie_title' // String-based value accessors!
        },
        {
      		Header: 'Country',
      		accessor: 'country' // String-based value accessors!
      	},
      	{
      		Header: 'Plot Keywords',
      		accessor: 'plot_keywords' // String-based value accessors!
      	},
      	{
      		Header: 'Title Year',
      		accessor: 'title_year' // String-based value accessors!
        },
        {
      		Header: 'Content Rating',
      		accessor: 'content_rating' // String-based value accessors!
      	}
      ]
    return (
		<div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
      <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
			<div className="row">
				<div className="col-lg-2 col-sm-2 col-md-2 col-xs-4 text-left">
					<button className="btn btn-primary" color="danger" onLoad={ this.getData } onClick={ this.getData }>Load Data</button>
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
        {/* <div className="form-group">
            <label className="control-label col-sm-2" name="create_date">Created Date :</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" _id="create_date" name="create_date" value={this.state.create_date} onChange={this.inputHandleChangecreate_date.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
        </div> */}
        <div className="form-group">
            <label className="control-label col-sm-2" name="fname">name :</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" _id="fname"  name="name" value={this.state.name} onChange={this.inputHandleChangename.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
        </div>
        <div className="form-group">
            <label className="control-label col-sm-2" name="email">email :</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" _id="email"  name="email" value={this.state.email} onChange={this.inputHandleChangeemail.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
        </div>
        <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="phone">Mobile :</label>
            <div className="col-sm-10"> 
                <input type="text" className="form-control" _id="phone"  name="phone" value={this.state.phone} onChange={this.inputHandleChangephone.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
        </div>
        <div className="form-group">
            <label className="control-label col-sm-2" name="htown">gender:</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" _id="htown"  name="gender" value={this.state.gender} onChange={this.inputHandleChangegender.bind(this)} ref={node => (this.inputNode = node)} />
            </div>
        </div>    
        <div className="form-group">
            <div className="col-lg-6 col-sm-6 col-xs-6"><input type="submit" value="Submit"/></div>
            <div className="col-lg-6 col-sm-6 col-xs-6"><input type="reset" onClick={this.onCloseModal} value="Cancle"/></div>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'; 

class GoogleAuth extends Component {
  
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '799213889100-t13p2tf5jug7j20fsrt5ptkm48cp0q3a.apps.googleusercontent.com',
                scope: 'email',
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange); 
        });
    });
    };
    onAuthChange = (isSignedIn) => {
        if( isSignedIn ) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };
    
    renderAuthButton () {
        if ( this.props.isSignedIn === null ) { 
            return null
        } else if (  this.props.isSignedIn === true ) {
            return ( 
                    <button onClick={ () => this.auth.signOut() } className="ui button red google">
                        <i className="google icon" />Logout
                    </button>
                      
                );
        } else {
            return (
                        <button onClick={ () => this.auth.signIn() } className="ui button red google">
                            <i className="google icon" />Sign In with Google
                        </button>   
                    );
        }  
     }
    render () {
        return (
            <div>{ this.renderAuthButton () }</div>
        ); 
    }
}
const mapStateToProps = ( state ) => {
    return {  isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
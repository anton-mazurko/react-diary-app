import React, {Component} from 'react';
import {connect} from 'react-redux';
import {googleLogin, twitterLogin} from '../actions/userAction';

class Login extends Component {

  componentDidMount () {
    if (this.props.user !== null) {
      this.props.history.push('/');
    }
  }
  
  componentDidUpdate () {
    if (this.props.user !== null) {
      this.props.history.push('/')
    }
  }


  render () {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron" style={{marginTop: '-20px'}}>
            <h1>
              Login with your favourite <b>Social Network</b>
            </h1>
          </div>
          
          <div className="col-sm-6">
            <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Login with Google</button>
          </div>

          <div className="col-sm-6">
            <button className="btn btn-success btn-lg" onClick={this.props.twitterLogin}>Login with Twitter</button>
          </div>
        </div>

       
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {googleLogin, twitterLogin})(Login);
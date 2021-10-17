import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from '../actions/userAction';
import {getNotes} from '../actions/notesAction';
import Loading from '../components/Loading';

class LoadingComponent extends Component {
  
  componentDidMount () {
    const {userLoading, notesLoading} = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }

    if (notesLoading === undefined) {
      this.props.getNotes();
    }
  }

  componentDidUpdate () {
    if (this.props.notesLoading === -1 && this.props.user !== null) {
      this.props.getNotes()
    }
  }


  render () {
    const {userLoading, notesLoading, children} = this.props;
    if ((userLoading === false && notesLoading === false) || this.props.user !== null) {
      return <div>{children}</div>;
    } else {
      return <Loading />;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes
  }
}

export default withRouter(connect(mapStateToProps, {getNotes, getUser})(LoadingComponent));


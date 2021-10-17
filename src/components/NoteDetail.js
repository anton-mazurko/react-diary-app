import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SubmitComment from './SubmitComment';
 
 
class NoteDetail extends Component {
  render() {
    const {note} = this.props;
    return (
      // <div>note detail...</div>;
      <div className="container-fluid">
        <div className="row">
          <div className="row col-sm-6 col-sm-offset-3">
            <h1>{note.title}</h1>
            <p>{note.body}</p>
            <SubmitComment/>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    uid: state.user.uid
  }
}

export default connect(mapStateToProps)(NoteDetail);
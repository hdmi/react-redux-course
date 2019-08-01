import React from 'react';
import Modal from '../Modal';
import history from '../../history'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions'


class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <div>
        <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
      </div>
    )
  }

  renderContent() {
    if(!this.props.stream){
      return 'Are you sure you want to delete the stream?'
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
        />
  )
}
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streamReducer[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);

import React from 'react';
import {connect} from 'react-redux'
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render(){

    if(!this.props.stream) {
      return <div>Loading...</div>
    }

    const {title, description} = this.props.stream;
    
    return (
      <div>
        <h3>Edit the stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={{title: title, description: description}}/>
      </div>
    );

  }

}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streamReducer[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);

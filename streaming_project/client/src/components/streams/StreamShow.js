import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {

  // Setup JSX Reference
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    flv.createPlayer({
      type: 'flv',
      url: ''
    })
  }

  render() {

    if(!this.props.stream) {
      return <div>Loading...</div>
    }
      const {title, description} = this.props.stream;
    return (
      <div>
        <video ref={this.videoRefW} style={{width: '100%'}} controls/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {stream: state.streamReducer[id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);

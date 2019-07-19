import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions';

class App extends React.Component {

  onClickIncrement = () => {
    this.props.dispatch(incrementCounter())
  }

  onClickDecrement = () => {
    this.props.dispatch(decrementCounter())
  }

  render() {
    return (
      <div className="ui segment center aligned">

        <div className="ui header">
          <h3>Count: {this.props.counter}</h3>
        </div>
        <div className="inline">
          <button className="ui button" onClick={this.onClickDecrement}>
            Decrement
          </button>

          <button className="ui button" onClick={this.onClickIncrement}>
            Increment
          </button>

        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {counter: state.counterReducer}
};

export default connect(mapStateToProps)(App);

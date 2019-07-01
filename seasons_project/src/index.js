import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner  from './Spinner';

class App extends React.Component {

  //Same as initializing the state in the constructor
  state = { lat: null, errorMsg: ''};

  componentDidMount () {
    //console.log('Life cycle: Component mounted')
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMsg: err.message})
    )
  }

  componentDidUpdate () {

    console.log('Life cycle: Component updated')

  }

  renderContent(){
    if(this.state.lat && !this.state.errorMsg){
        return <SeasonDisplay lat={this.state.lat} />
    } else if (!this.state.lat && this.state.errorMsg) {
        return <div>Error: {this.state.errorMsg}</div>
    }

    return <Spinner message='Please, allow location request' />
  }

  render(){

    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );

  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

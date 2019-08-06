import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  state = {color: 'blue'}

  onColorChange = (color) => {
    this.setState({color});
  }

  render () {
    console.log('state', this.state)
    return (

      <div className="ui container segment">
        <LanguageStore>
          <LanguageSelector/>

          <div>
            Select a color:
            <i className="circle icon red" onClick={() => this.onColorChange('red')}/>
            <i className="circle icon blue" onClick={() => this.onColorChange('blue')}/>
          </div>

          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>

        </LanguageStore>
      </div>
    );
  }
}

export default App;

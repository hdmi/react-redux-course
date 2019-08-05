import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {

  state = {lang: 'EN', color: 'blue'}

  onLanguageChange = (lang) => {
    this.setState({lang});
  }

  onColorChange = (color) => {
    this.setState({color});
  }

  render () {
    console.log('state', this.state)
    return (

      <div className="ui container segment">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('EN')}/>
          <i className="flag nl" onClick={() => this.onLanguageChange('NL')}/>
        </div>

        <div>
          Select a color:
          <i className="circle icon red" onClick={() => this.onColorChange('red')}/>
          <i className="circle icon blue" onClick={() => this.onColorChange('blue')}/>
        </div>

        <LanguageContext.Provider value={this.state.lang}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

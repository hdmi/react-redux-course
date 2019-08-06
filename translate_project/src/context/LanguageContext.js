import React from 'react';

const Context =  React.createContext('EN');

export class LanguageStore extends React.Component {

  state = {lang: 'EN'};

  onLanguageChange = (lang) => {
    this.setState({lang})
  }

  render () {
    return (
      <Context.Provider value={ {...this.state, onLanguageChange: this.onLanguageChange} } >
        {this.props.children}
      </Context.Provider>
    );
  }

}

export default Context;

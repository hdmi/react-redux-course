import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {

  // Same as Field.contextType = LanguageContext;
  static contextType = LanguageContext;

  render () {
    const text =  this.context === 'EN' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <h3>{text}</h3>
        <input />
      </div>
    );
  }


}

export default Field;

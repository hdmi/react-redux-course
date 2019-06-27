// Import React and reactdom libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText() {
  return 'Click me !'
}

// Create react component
const App = function () {
  const buttonText = { text: 'Click me!!'}
  const labelText = 'Enter name: '

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'pink', color: 'white',}}>
        {buttonText.text}
      </button>
    </div>
  );
};

//  Run react component
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

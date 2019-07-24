import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const PageOne = () => {

 // Do not navigate using anchors, react/redux state is lost, use Link instead
  return (
    <div>
      PageOne
      <Link to="/pagetwo"> Goto Page 2</Link>
    </div>
  );
}

const PageTwo = () => {

  // Do not navigate using anchors, react/redux state is lost, use Link instead
  return (
    <div>
      PageTwo
      <Link to="/"> Goto Page 1</Link>
    </div>
  );
}

const App = () => {
  return (

    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;

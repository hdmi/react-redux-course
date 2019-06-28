import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentElement from './CommentElement';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
      </ApprovalCard>
      <ApprovalCard>
        <CommentElement
          author={Faker.name.firstName()}
          date="Hoy a las 09:33"
          text="Gracias por el artículo :)"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentElement
          author={Faker.name.firstName()}
          date="Hoy a las 12:33"
          text="Gran aportación"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentElement
          author={Faker.name.firstName()}
          date="Ayer a las 08:33"
          text="Hola, ¿alguien sabe como hacer el paso 3?"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );

};

ReactDOM.render(<App/>, document.querySelector('#root'))

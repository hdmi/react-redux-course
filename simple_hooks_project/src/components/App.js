import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () =>{
  const [resource, setResource] = useState('posts')
    return (
      <div className="ui container segment">
        <div>
          <button className="ui button blue" onClick={()=>setResource('posts')}>Posts</button>
          <button className="ui button white" onClick={()=>setResource('todos')}>Todos</button>
        </div>
        <h3>Users</h3>
        <UserList />
        <h3>{resource.charAt(0).toUpperCase()+resource.slice(1)}</h3>
        <ResourceList resource={resource} />
      </div>
    );


}

export default App;

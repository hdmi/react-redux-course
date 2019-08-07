import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setStates] = useState([]);

  useEffect(
    () => {
      (async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setStates(response.data)
      })(resource);
    },
    [resource]
  );

  return resources;
};

export default useResources;

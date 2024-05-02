import React from 'react';
import { useFetch } from './Components/FetchHook'; 
import Nav from './Nav'

const Info = () => {
  
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  
  const { data, error, isLoading } = useFetch(apiUrl);


  if (isLoading) {
    return <div><Nav />Loading...</div>;
  }

 
  if (error) {
    return <div><Nav />Error: {error.message}</div>;
  }

  
  if (!Array.isArray(data)) {
    if (data.results) {
      const results = data.results;
      return (
        <div>
          <ul>
            {results.map((result) => (
              <p key={result.id}><br></br>{result.name}<br></br>{result.status}<br></br>{result.species}<br></br>{result.type}{result.gender}<br></br>{result.origin.name}{result.origin.url}<br></br>{result.location.url}<br></br>{result.location.name}<br></br>{result.imgage}{result.episode[0]}</p>
              
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Error: Data is not in the expected format</h1>
          <p key={data.id}>{data.name}</p>
        </div>
      );
    }
  }
  
  
};

export default Info;
import React from 'react';
import { useFetch } from './Components/FetchHook'; // Assuming you have a custom hook named useFetch
import Nav from './Nav'

const Info = () => {
  // Assuming the API URL
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  // Fetching data using the useFetch hook
  const { data, error, isLoading } = useFetch(apiUrl);

  // Render loading state
  if (isLoading) {
    return <div><Nav />Loading...</div>;
  }

  // Render error state if any error occurred during fetch
  if (error) {
    return <div><Nav />Error: {error.message}</div>;
  }

  // Check if data is an array before calling map function
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
  // Render character names
  
};

export default Info;
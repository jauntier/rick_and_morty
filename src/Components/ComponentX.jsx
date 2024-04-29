// import React from 'react'
// import { useFetch } from './FetchHook'

// const ComponentX = () => {
//     const {data = [], isLoading, error} = useFetch("https://rickandmortyapi.com/api/character")
//     if (isLoading) {
//         return <div>Loading...</div>
//     }
//     if (error) {
//         return <div>Error: {error.message}</div>
//     }

//     const characterArray = Object.values(data);

//     return (
//         <ul>
//             {characterArray.map((character) => (
//                 <li key={character.id}>{character.name}</li>
//             ))}
//         </ul>
//     );
//     };

    

// export default ComponentX

import React from 'react';
import { useFetch } from './FetchHook'; 

const ComponentX = () => {
  
  const apiUrl = 'https://rickandmortyapi.com/api/character';

 
  const { data, error, isLoading } = useFetch(apiUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

 
  if (!Array.isArray(data)) {
    if (data.results) {
      const results = data.results;
      return (
        <div>
          <br></br>
          <ul>
            {results.map((result) => (
              <p key={result.id}>{result.name}</p>
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

export default ComponentX;

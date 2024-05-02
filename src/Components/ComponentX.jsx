// import React from 'react';
// import { useFetch } from './FetchHook'; 

// const ComponentX = () => {
  
//   const apiUrl = 'https://rickandmortyapi.com/api/character';

 
//   const { data, error, isLoading } = useFetch(apiUrl);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

 
//   if (!Array.isArray(data)) {
//     if (data.results) {
//       const results = data.results;
//       return (
//         <div>
//           <br></br>
//           <ul>
//             {results.map((result) => (
//               <p key={result.id}>{result.name}</p>
//             ))}
//           </ul>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>Error: Data is not in the expected format</h1>
//           <p key={data.id}>{data.name}</p>
//         </div>
//       );
//     }
//   }


// };

// export default ComponentX;

import React, { useState } from 'react';
import { useFetch } from './FetchHook'; 

const ComponentX = () => {
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  const { data, error, isLoading } = useFetch(apiUrl);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let filteredData = Array.isArray(data?.results) ? data.results : [];
  if (searchQuery) {
    filteredData = filteredData.filter((result) =>
      result.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <input
      className="text-black"
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <br />
      <ul>
        {filteredData.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentX;
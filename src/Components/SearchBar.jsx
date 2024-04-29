import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <ul className="list-none p-0 m-0">
        {filteredData.map((item, index) => (
          <li key={index} className={`p-4 ${index !== filteredData.length - 1 ? 'border-b border-gray-300' : ''}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
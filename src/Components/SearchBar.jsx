import React from 'react'
import { Link } from 'react-router-dom';


const SearchBar = ({characterx, search, setSearch}) => {
  const filtered = characterx.filter(character =>
  character.name.toLowerCase().includes(search.toLowerCase())
  );

  return <div><input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}></input>
  <ul>{filter.map(character => (
    <li key={character.id}><Link to={`/character/${character.id}`} />{character.name}</li>
  ))}</ul>

  </div>;

}

export default SearchBar
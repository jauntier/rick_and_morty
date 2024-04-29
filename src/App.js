import { Route, Routes } from 'react-router-dom';
import './App.css';

import ComponentX from './Components/ComponentX';
import Info from './Info';


import './index.css';
import Nav from './Nav';
// import SearchBar from './Components/SearchBar';

function App() {
  return (
    
    <div >
      
<div><Nav /></div>
{/* <div><SearchBar data={data}/></div> */}

<div className="flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold text-4xl">
      <Routes>
    <Route path="/" element={<ComponentX/>}/>
    <Route path="/info" element={<Info/>}/>
    

      </Routes>

        
        
</div>

<div><input className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold text-4xl p-4 rounded-md focus:outline-none focus:border-blue-500 w-full" type="textarea"></input></div>
      </div>
    
  );



}

export default App;

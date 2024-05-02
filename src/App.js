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
{/* <div><SearchBar /></div> */}

<div className="flex text-white font-semibold text-4xl flex">
      <Routes>
    <Route path="/" element={<ComponentX/>}/>
    <Route path="/info" element={<Info/>}/>
    

      </Routes>

        
        
</div>


      </div>
    
  );



}

export default App;

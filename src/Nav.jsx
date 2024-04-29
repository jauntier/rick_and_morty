import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div><nav className="bg-gray-800 py-4">
        <ul className="flex justify-center space-x-8">

            <li className="text-white hover:text-gray-300"><Link to="/">Characters</Link></li>
            <li className="text-white hover:text-gray-300"><Link to="/info">Information</Link></li>
        
        </ul>
        
        </nav></div>
  )
}

export default Nav
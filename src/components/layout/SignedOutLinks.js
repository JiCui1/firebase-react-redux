import React from 'react' 

//nav link can tell when a certain link is the active link
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        
        <ul className = "right">
            <li><NavLink to='/signup'>Register</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>

    )
}

export default SignedOutLinks
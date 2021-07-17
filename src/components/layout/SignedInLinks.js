import React, { Profiler } from 'react' 

import {connect} from 'react-redux'

import {signOut} from '../../store/actions/authActions'

//nav link can tell when a certain link is the active link
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className = "right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initial}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: ()=>{dispatch(signOut())}
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)
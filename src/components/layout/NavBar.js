import React from 'react' 

// Link is used to navigate to different pages
import {Link} from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import {connect} from 'react-redux'

//the whole nav bar on the top
const NavBar = (props)=>{
    const {auth,profile} = props
    console.log(auth)

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return(
        //classname is materialize css styling
        <nav className="nav-wrapper grey darken-3">
            <div className="container">

                {/* '/ ' sends back to home page, brand-logo is material styling */}
                <Link to='/' className = "brand-logo">Mario Plan</Link>
                {links}
                {/* <SignedInLinks />
                <SignedOutLinks /> */}

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)
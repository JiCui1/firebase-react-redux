import React,{useState} from 'react'

import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'

import {signUp} from '../../store/actions/authActions'

const SignUp = (props) => {

    const [email,setEmail] = useState(0)
    const [password,setPassword] = useState(0)
    const [firstName,setFirstName] = useState(0)
    const [lastName,setLastName] = useState(0)

    const handleChange = (e) =>{

        if(e.target.type == "email"){setEmail(e.target.value)}
        if(e.target.type=="password"){setPassword(e.target.value)}
        if(e.target.id=="lastName"){setLastName(e.target.value)}
        if(e.target.id=="firstName"){setFirstName(e.target.value)}
        
    }    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.signUp({email,password,firstName,lastName})
    }

    const {auth} = props
    const {authError} = props

    if (auth.uid) return <Redirect to='/' />

    return(
        <div className="container">

            <form className="white" onSubmit = {handleSubmit} >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange = {handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange = {handleChange} />
                </div>


                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange = {handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange = {handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className = "red-text center">

                        {authError? <p>{authError}</p> : null}

                    </div>
                </div>

                
                
            </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
import { render } from '@testing-library/react'
import React,{Component} from 'react'

import Notifications from './Notification'
import ProjectList from '../projects/ProjectList'

//this connect redux to react
import {connect} from 'react-redux'

//connect to firestore database
import { firestoreConnect } from 'react-redux-firebase'

//compose to connect multiple higher order functions
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'



//passing state as props
const Dashboard = (props) => {

    const {projects, auth} = props

    if(!auth.uid) return <Redirect to='/signin' />

    return(
        
        <div className="dashboard container">

            <div className="row">
                {/* project list div with materilized grid styling css grid */}
                <div className="col s12 m6">
                    <ProjectList projects = {projects}/>
                </div>


                {/* notification div with materilized grid styling css grid */}
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>

        </div>
    )
}

//getting state from store and pass as props to this component
//getting the projects list 
const mapStateToProps  = (state) =>{
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

//connect redux to react, compose to join multiple higher order functions together
export default compose(
    //connect firestore to projects collection
    firestoreConnect([
        { collection: 'projects' }
    ]),
    connect(mapStateToProps),

)(Dashboard)
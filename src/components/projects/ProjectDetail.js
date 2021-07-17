import React from 'react' 
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

//moment package to format date
import moment from 'moment'

const ProjectDetail = (props) => {

    const {auth} = props

    const { project } = props

    if(!auth.uid) return <Redirect to='/signin' />

    if(project){
        return(
        <div className="container section project-details">

            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div> Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <p className = "grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>

        </div>
        )
    } else{
        return(
            <div className="container center">
                <p>Loading Project</p>
            </div>
        )
    }

    const id = props.match.params.id


}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        project,
        auth:state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ]),
)(ProjectDetail)
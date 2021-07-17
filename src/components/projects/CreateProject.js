import React, {useState} from 'react' 
import {createProject} from '../../store/actions/projectActions'

import {connect} from 'react-redux'
import { createStore } from 'redux'

import { Redirect } from 'react-router-dom'




const CreateProject = (props) => {

    const [title, setTitle] = useState(0)
    const [content, setContent] = useState(0)

    const {auth} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("clicked submit")
        props.createProject({title,content})
        //redirect back to the home page after creating new project
        props.history.push('/')
    }

    const handleChange = (e) => {
        if(e.target.id=="content"){setContent(e.target.value)}
        if(e.target.id=="title"){setTitle(e.target.value)}
    }

    if (!auth.uid) return <Redirect to='/signin' />


    return(
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "white">
            <h5 className="grey-text text-darken-3">Create a New Project</h5><br></br>
                <div className = "input-field">
                    <label htmlFor = "title">Title</label>
                    <input type = "text" id = "title" onChange = {handleChange} /><br></br>
                </div>

                <div className = "input-field">
                    <label htmlFor = "content">Content</label>
                    <textarea id="content" name="content" cols="30" rows="10" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick = {handleSubmit}>Create</button>
                </div>




            </form>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)


import React from 'react' 
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects})=>{
    return(
        <div className="project-list section">

            {/* first projects is to check if there's any projects in the props */}
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/'+project.id} key={project.id}>
                        <ProjectSummary project={project} />      
                    </Link>
                )
            })}

{/*             
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary /> */}
 
     
        </div>
    )
}

export default ProjectList
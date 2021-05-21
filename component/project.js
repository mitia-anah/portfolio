import React from "react"
import projectData from '../data/projects.json'
// import styled from 'styled-components'


// const ListItem = styled.div`
// l
// `;

function Project() {
    const getProjects = projectData.projects;
    return (
        <div className="listItem">
            {getProjects.map(project => (
                <ul key={project.id}>
                    <li>
                        <a></a>
                        <h2>{project.name}</h2>
                        {/* <img src={project.picture}/> */}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Project
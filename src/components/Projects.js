import GridItem from "./GridItem"


const Projects = (props) => {
    return (
        <>
            <div id='projects'>
                <div id="projects-main">
                    <GridItem projects={props.projects}  />
                </div>
            </div>
        </>
    )
}

export default Projects
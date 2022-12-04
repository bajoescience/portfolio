import { Box, Grid, Link } from "@mui/material"
import React from "react"

const GridItem = (props) => {
    const width = window.screen.width
    const details = (project) => {
        if (!project) throw new Error('project not defined')
        return (
            <>
                <Box borderRadius={2}>    
                    <div>
                        <h5 style={{color: '#2CEEF0'}}>{project.title}</h5>
                        <p style={{color: '#B4F5F0', paddingTop: '10px', paddingBottom: '10px'}}>
                            {project.description}
                        </p>
                        <p>
                            <Link color='#fff' href={project.link} target='_blank'>Project Link</Link>
                        </p>
                    </div>
                </Box>
            </>
        )
    }

    const image = (project) => {
        return (
            <>
                <Box 
                borderRadius={2} 
                minHeight={270} 
                minWidth={200} 
                bgcolor='white'
                >
                    <img 
                    alt={`project ${project.id}`} 
                    style={{objectFit: 'fill', width: '100%', height: '100%'}}
                    src={project.image} 
                    />
                </Box>
            </>
        )
    }

    return (
        <Grid container spacing={4} sx={{paddingBottom: 4}}>
            {(width < 600) ?
            props.projects.map(p => (<>
                <Grid item xs={12} sm={6}>
                    {image(p)}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {details(p)}
                </Grid>
            </>
            ))
            :
            props.projects.map(p => (p.id)%2 === 1 
            ? 
            (
                <>
                    <Grid item xs={12} sm={6}>
                        {details(p)}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {image(p)}
                    </Grid>
                </>
            )
            :
            (
                <>
                    <Grid item xs={12} sm={6}>
                        {image(p)}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {details(p)}
                    </Grid>
                </>
            )
            )
        }
        </Grid>
    )
}

export default GridItem
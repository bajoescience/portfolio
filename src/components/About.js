import { Grid, Box } from "@mui/material"

const About = (props) => {

    const image = () => {
        return (
            <>
                <Box 
                borderRadius={2} 
                minHeight={600} 
                minWidth={200} 
                marginLeft={1}
                marginRight={1}
                bgcolor='white'
                >
                </Box>
            </>
        )
    }
    return (
        <div id="about">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {image()}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div id="about-details">
                        <h1 style={{color: '#2CEEF0'}}>NAME HERE</h1>
                        <h3 style={{color: '#2CEEF0'}}>PROJECT TITLE</h3>
                        <p style={{color: '#B4F5F0'}}>
                           {props.about}
                        </p>
                        <div>
                            {/**Resume button goes here */}
                        </div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <h3 style={{color: '#2CEEF0'}}>SKILLS</h3>
                                <p style={{color: '#B4F5F0'}}>
                                    {props.skills}
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <h3 style={{color: '#2CEEF0'}}>VISION</h3>
                                <p style={{color: '#B4F5F0'}}>
                                    {props.vision}
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <h3 style={{color: '#2CEEF0'}}>INTEREST</h3>
                                <p style={{color: '#B4F5F0'}}>
                                    {props.interest}
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
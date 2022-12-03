import { Grid, Box, Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const About = (props) => {

    const image = () => {
        return (
            <>
                <Box 
                borderRadius={2}  
                minWidth={200}
                marginRight={1}
                bgcolor='beige'
                sx={{
                    marginLeft: {xs: 3, sm: 1},
                    marginRight: {xs: 3, sm: 1},
                    minHeight: {xs: 400, sm: 600}
                }}
                >
                    <img alt={props.name.toLowerCase()} src={props.image} />
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
                        <div>
                            <h1 style={{color: '#2CEEF0'}}>NAME HERE</h1>
                        </div>
                        <div>
                            <h5 style={{color: '#2CEEF0'}}>PROJECT TITLE</h5>
                        </div>
                        <div>
                            <p style={{color: '#B4F5F0'}}>
                            {props.about}
                            </p>
                        </div>
                        <div style={{marginBottom: 10}}>
                            {/**Resume button goes here */}
                            <a 
                            style={{textDecoration: 'none'}} 
                            href={props.resume !== '' ? props.resume : null}
                            >
                                <ThemeProvider theme={theme}>
                                    <Button 
                                    variant='outlined' 
                                    color='neutral' 
                                    size={props.buttonSize()} 
                                    >
                                        Get Resume
                                    </Button>
                                </ThemeProvider>
                            </a>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <h5 style={{color: '#2CEEF0'}}>SKILLS</h5>
                                <p style={{color: '#B4F5F0'}}>
                                    {props.skills}
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <h5 style={{color: '#2CEEF0'}}>VISION</h5>
                                <p style={{color: '#B4F5F0'}}>
                                    {props.vision}
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <h5 style={{color: '#2CEEF0'}}>INTEREST</h5>
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
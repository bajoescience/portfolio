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
                borderRadius={5}  
                minWidth={200}
                marginRight={1}
                bgcolor='beige'
                sx={{
                    marginLeft: {xs: 3, sm: 0},
                    marginRight: {xs: 3, sm: 1},
                    minHeight: {xs: 300, sm: 600}
                }}
                >
                    <img alt={props.name.toLowerCase()} className='img' src={props.image} />
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
                            <h1 style={{color: '#2CEEF0'}}>{props.name}</h1>
                        </div>
                        <div>
                            <h5 style={{color: '#2CEEF0'}}>A Little More Information About Me</h5>
                        </div>
                        <div>
                            <p style={{color: '#B4F5F0', fontSize: 'large'}}>
                            {props.about}
                            </p>
                        </div>
                        <div style={{marginBottom: 10}}>
                            {/**Resume button goes here */}
                            <a 
                            style={{textDecoration: 'none'}} 
                            href={props.resume !== '' ? props.resume : null}
                            download
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
                            <Grid item xs={12}>
                                <h5 style={{color: '#2CEEF0'}}>SKILLS</h5>
                                <div style={{color: '#B4F5F0', marginLeft: '-13px', fontSize: 'large'}}>
                                    <ul>
                                        <Grid container spacing={1}>
                                            {props.skills.map((s, i) => <Grid item xs={12} sm={4} key={i}><li>{s}</li></Grid>)}
                                        </Grid>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <h5 style={{color: '#2CEEF0'}}>VISION</h5>
                                <p style={{color: '#B4F5F0', fontSize: 'large'}}>
                                    {props.vision}
                                </p>
                            </Grid>
                            <Grid item xs={12}>
                                <h5 style={{color: '#2CEEF0'}}>INTEREST</h5>
                                <p style={{color: '#B4F5F0', fontSize: 'large'}}>
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
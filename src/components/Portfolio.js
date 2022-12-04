import {Button} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'

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


const Portfolio = (props) => {
    const navigate = useNavigate()
    const onClick = (page) => () => {   
        navigate(`/portfolio/${page}`)
    }
    return (
      <>
        <div id='main'>
          <div id='main-text'>
            <b>{props.headerText}</b>
          </div>
          <div id='more-info'>
            <p style={{color: '#2CAAF0'}}>Why should you hire me?</p>
            <p>{props.mainText}</p>
          </div>
          <div id='button-div'>
            <span className='button'>
              <ThemeProvider theme={theme}>
                <Button 
                variant='outlined' 
                color='neutral' 
                size={props.buttonSize()} 
                onClick={onClick('projects')}
                >Projects</Button>
              </ThemeProvider>
            </span>
            <span className='button'>
              <ThemeProvider theme={theme}>
                <Button 
                variant='outlined' 
                color='neutral' 
                size={props.buttonSize()}
                onClick={onClick('about')} 
                >About</Button>
              </ThemeProvider>
            </span>
            <span className='button'>
              <ThemeProvider theme={theme}>
                <Button 
                variant='outlined' 
                color='neutral' 
                size={props.buttonSize()}
                onClick={onClick('contacts')}
                >Contact me</Button>
              </ThemeProvider>
            </span>
          </div>
        </div>
      </>
    )
}

export default Portfolio
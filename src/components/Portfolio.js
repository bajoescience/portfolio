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
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus.</b>
        </div>
        <div id='more-info'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.</p>
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
import { Outlet, Link } from 'react-router-dom'
import './index.css'

const App = (props) => {

  const isNameThere = () => {
      const width = window.screen.width
      if (width > 520) {
        return <span id='name'><b>JOSEPH BOLA-AJAYI</b></span>
      }
      return null
  }
  return (
    <>
      <div id='body'>
      <div id='nav'>
        <div id='links'>
          <span id='initials'>J</span>
          {isNameThere()}
          <span className='nav-main'>
            <Link className='link' to={`/portfolio/contacts`}>CONTACTS</Link>
          </span>
          <span className='nav-main'>
            <Link className='link' to={`/portfolio/about`}>ABOUT</Link>
          </span>
          <span className='nav-main'>
          <Link className='link' to={`/portfolio`}>PORTFOLIO</Link>
          </span>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  )
}
export default App;
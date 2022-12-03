import { useEffect, useState } from 'react'
import { Outlet, NavLink, useMatch } from 'react-router-dom'
import './index.css'

const App = (props) => {
  const [showName, setShowName] = useState(true)

  const match = useMatch('/portfolio')


  useEffect(() => {
    const width = window.screen.width
    if (width > 520 && match) {
      setShowName(true)
    } else {
      setShowName(false)
    }
  })

  const handleActiveLink = (links) => ({isActive}) => {
    if (links === 'portfolio' && !match) {
      return undefined
    }
    // Allow name to be there for portfolio link and latop devices
    return isActive ? activeLinkStyle : undefined
  }

  let activeLinkStyle = {
    color: '#2CEEF0'
  }
  return (
    <>
      <div id='body'>
      <div id='nav'>
        <div id='links'>
          <span id='initials'>{props.initials}</span>
          {showName && <span id='name'><b>{props.name}</b></span>}
          <span className='nav-main'>
            <NavLink 
            className='link' 
            style={handleActiveLink('projects')}
            to={`/portfolio/projects`}
            >
              PROJECTS
            </NavLink>
          </span>
          <span className='nav-main'>
            <NavLink 
            className='link' 
            style={handleActiveLink('about')} 
            to={`/portfolio/about`}
            >
              ABOUT
            </NavLink>
          </span>
          <span className='nav-main'>
            <NavLink 
            className='link' 
            style={handleActiveLink('portfolio')} 
            to={`/portfolio`}
            >
              PORTFOLIO
            </NavLink>
          </span>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  )
}
export default App;
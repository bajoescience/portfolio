import { useEffect, useState } from "react";
import { Outlet, NavLink, useMatch, useNavigate } from "react-router-dom";
import "./index.css";

const App = (props) => {
  const [showName, setShowName] = useState(true);

  const match = useMatch("/portfolio");
  const navigate = useNavigate();

  useEffect(() => {
    const width = window.screen.width;
    if (width > 520 && match) {
      setShowName(true);
    } else {
      setShowName(false);
    }
  }, [match]);

  const handleActiveLink =
    (links) =>
    ({ isActive }) => {
      if (links === "portfolio" && !match) {
        return undefined;
      }
      // Allow name to be there for portfolio link and latop devices
      return isActive ? activeLinkStyle : undefined;
    };

  let activeLinkStyle = {
    color: "#2CEEF0",
  };

  const initialsClick = () => {
    !match && navigate("/portfolio");
  };
  return (
    <>
      <span id="initials-double" onClick={initialsClick}>
        {props.initials}
      </span>
      <div id="body">
        <div id="nav">
          <div id="links">
            <span id="initials" onClick={initialsClick}>
              {props.initials}
            </span>
            {showName && (
              <span id="name">
                <b>{props.name}</b>
              </span>
            )}
            <span className="nav-main">
              <NavLink
                className="link"
                style={handleActiveLink("projects")}
                to={`/portfolio/projects`}
              >
                PROJECTS
              </NavLink>
            </span>
            <span className="nav-main">
              <NavLink
                className="link"
                style={handleActiveLink("about")}
                to={`/portfolio/about`}
              >
                ABOUT
              </NavLink>
            </span>
            <span className="nav-main">
              <NavLink
                className="link"
                style={handleActiveLink("portfolio")}
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
  );
};
export default App;

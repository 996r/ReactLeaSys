import { Link } from "react-router";
import UserContext from "../context/UserContext";
import { useContext } from "react";


export default function Header() 
{
const { isAuthenticated } = useContext(UserContext);

  return (
    <nav id="navbar">
      <div className="nav-container">
        <Link to="#home" className="logo-link"></Link>
        <svg
          className="logo-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
              <stop
                offset="100%"
                style={{ stopColor: "#ff3366", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 20,50 50,90 80,50"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth={3}
          />
          <circle cx="50" cy="50" r="5" fill="url(#logoGrad)"></circle>
        </svg>
        <span className="logo-text">Car Leasing Bulgaria</span>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/collection" className="nav-link">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/feature" className="nav-link">
              Featured
            </Link>
          </li>
          <li>
            
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
         {isAuthenticated ? (
          <>
          <li>
            <Link to="/addCar" className="nav-cta">
              Add Car
            </Link>
          </li>
          <li>
            <Link to="/logout" className="nav-cta">
              Logout
            </Link>
          </li>
          </>
         ):(
          <>
          <li>
            <Link to="/login" className="nav-cta">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-cta">
              Register
            </Link>
          </li>
          </>
         )}
         
          </ul>
          
         
        <div className="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

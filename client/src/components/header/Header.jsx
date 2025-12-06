import { Link } from "react-router";
export default function Header() {
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
            <Link to="#home" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link to="#collections" className="nav-link">
              Collections
            </Link>
          </li>
          <li>
            <Link to="#featured" className="nav-link">
              Featured
            </Link>
          </li>
          <li>
            <Link to="#contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="#contact" className="nav-cta">
              Get In Touch
            </Link>
          </li>
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

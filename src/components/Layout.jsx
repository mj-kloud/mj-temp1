import { NavLink } from "react-router-dom";

const getNavClass = ({ isActive }) => (isActive ? "active" : "");

const Layout = ({ children }) => (
  <>
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark"></span>
          Kloud Maker Company
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={getNavClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="footer">© 2024 Kloud Maker Company. All rights reserved.</footer>
  </>
);

export default Layout;

import { NavLink } from "react-router-dom";
import logo from "/data/assets/LOGO-HD.png";
import threeCircles from "/data/assets/3CIRCLES.svg";
import about from "/data/assets/ABOUT.svg";
import work from "/data/assets/WORK.svg";
import contact from "/data/assets/CONTACT.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="three cicle signature" className="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">
              <img src={about} alt="about in grafity style pink" />
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/works">
              <img src={work} alt="work in grafity style pink" />
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <img src={contact} alt="contact in grafity style pink" />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="menu-container">
          <button className="menu">MENU</button>
          <img src={threeCircles} alt="Three Circles" />
        </div>
      </div>
    </nav>
  );
}

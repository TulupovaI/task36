import { NavLink } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <>
    
    <div>
      <ul className="navigation">
        <li className="nav1">
          <NavLink to="/form" className="btn-nav" >
            Form
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink exact to="/" className="btn-nav" >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Nav;

import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="header">
      <h1>isave</h1>
      <div className="routes">
        <NavLink to="/" activeClassName="nav_active" exact={true}>
          post
        </NavLink>
        <NavLink to="/profile" activeClassName="nav_active" exact={true}>
          profile
        </NavLink>
        <NavLink to="/how-to-use" activeClassName="nav_active">
          How-To-Use
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

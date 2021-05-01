import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="header">
      <h1>isave</h1>
      <div className="routes">
        <Link to="/">Home</Link>
        <Link to="/how-to-use">How-To-Use</Link>
        <a
          href="https://github.com/devyuji/isave"
          target="_blank"
          rel="noopener noreferrer"
          className="github_link"
        >
          github
        </a>
      </div>
    </header>
  );
};

export default Navbar;

import github from "../images/github.svg";
import { memo } from "react";

function Navbar() {
	return (
		<header className="header">
			<h1>isave</h1>
			<a
				href="https://github.com/devyuji/isave"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={github} alt="github" />
				github
			</a>
		</header>
	);
}

export default memo(Navbar);

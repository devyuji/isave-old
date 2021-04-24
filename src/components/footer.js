import { memo } from "react";

function Footer() {
	return (
		<footer className="footer">
			<h1>
				made by{" "}
				<span>
					<a href="https://www.instagram.com/devyuji/">yuji</a>
				</span>
			</h1>
		</footer>
	);
}

export default memo(Footer);

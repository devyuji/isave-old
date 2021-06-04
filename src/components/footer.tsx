import { FC, memo } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      {/* <h1>made with ♥</h1> */}
      <h1>
        made by{" "}
        <span>
          <a href="https://www.instagram.com/devyuji/">yuji</a>
        </span>
      </h1>
      <a
        href="https://github.com/devyuji/isave"
        target="_blank"
        rel="noopener noreferrer"
        className="github_link"
      >
        github
      </a>
    </footer>
  );
};

export default memo(Footer);

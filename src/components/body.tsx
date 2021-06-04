import { FC } from "react";

interface BodyProps {
  inputValue: React.Dispatch<React.SetStateAction<string>>;
  fetch: React.FormEventHandler<HTMLFormElement>;
  title: string;
}

const Body: FC<BodyProps> = ({ inputValue, fetch, title }) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <form className="form" onSubmit={fetch}>
        <input
          type="url"
          placeholder="paste link here"
          onChange={(e) => inputValue(e.target.value)}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Body;

import { FC } from "react";

interface BodyProps {
  inputValue: React.Dispatch<React.SetStateAction<string>>;
  fetch: React.FormEventHandler<HTMLFormElement>;
}

const Body: FC<BodyProps> = ({ inputValue, fetch }) => {
  return (
    <div className="container">
      <h1 className="title">
        Download Instagram Videos, Images, And Reels In One Place.
      </h1>
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

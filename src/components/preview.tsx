import { FC } from "react";
import { createPortal } from "react-dom";

interface PreviewProps {
  togglePortal: () => void;
  imageLink: string;
}

const Preview: FC<PreviewProps> = ({ togglePortal, imageLink }) => {
  return createPortal(
    <div className="portal" onClick={togglePortal}>
      <div className="container">
        <div>
          <img src={`data:image/png;base64,${imageLink}`} alt="" />
        </div>
      </div>
    </div>,
    (document as any).getElementById("preview")
  );
};

export default Preview;

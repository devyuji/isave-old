import { FC } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { isModalOpen } from "../redux/action";

interface PreviewProps {
  imageLink: string;
}

const Preview: FC<PreviewProps> = ({ imageLink }) => {
  const modal = useSelector((s: any) => s.ISMODALOPEN);
  const dispatch = useDispatch();

  const togglePortal = () => {
    dispatch(isModalOpen(!modal));
  };

  const customStyles = {
    content: {
      backgroundColor: "rgba(255,255,255,0.5)",
      border: "none",
    },
  };

  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={togglePortal}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      preventScroll={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div className="portal" onClick={togglePortal}>
        <div className="container">
          <div>
            <img src={`data:image/png;base64,${imageLink}`} alt="" />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Preview;

import { FC } from "react";

// components
import Navbar from "../components/header";
import Footer from "../components/footer";

// images
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const HowToUse: FC = () => {
  return (
    <>
      <Navbar />
      <div className="how_container">
        <h1 className="heading">How To Use</h1>
        <ul>
          <li>
            <p className="details">
              Open the Instagram post with a image, videos or reels you want to
              save
            </p>
            <img src={image1} alt="" />
          </li>

          <li>
            <p className="details">Copy the link</p>
            <img src={image2} alt="" />
          </li>

          <li>
            <p className="details">
              Paste the links to Isave and click on submit or press enter
            </p>
            <img src={image3} alt="" />
          </li>

          <li>
            <p className="details">
              Click the download button. The photo will immediately be saved to
              the Downloads folder.
            </p>
            <img src={image4} alt="" />
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default HowToUse;

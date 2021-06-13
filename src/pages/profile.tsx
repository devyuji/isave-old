import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { MobileOnlyView } from "react-device-detect";

// lib
import { download } from "../lib/download";

// components
import Body from "../components/body";
import Navbar from "../components/header";
import Loading from "../components/loading";
import Footer from "../components/footer";
import Preview from "../components/preview";
import Error from "../components/error";

// redux
import { useDispatch, useSelector } from "react-redux";
import { isModalOpen, prevLinkProfile, profile } from "../redux/action";

const TITLE = "download profile image. Just paste the profile link";

const Profile: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const DATA = useSelector((s: any) => s.PROFILE_DATA);
  const prevInputValue = useSelector((s: any) => s.PREVLINK);
  const modal = useSelector((s: any) => s.ISMODALOPEN);
  const dispatch = useDispatch();

  const instagramUsername = (url: string) => {
    let username = url.split("/")[3];
    username = username.split("?")[0];

    return username;
  };

  const similarUrlCheck = () => {
    if (inputValue === prevInputValue.profile) return false;

    return true;
  };

  const instagramUrlCheck = () => {
    const p = new RegExp("(https?://(?:www.)?instagram.com/([^/?#&]+)).*");

    if (inputValue.match(p)) return true;

    return false;
  };

  const fetch = async (e: any) => {
    e.preventDefault();
    if (instagramUrlCheck() && similarUrlCheck()) {
      const username = instagramUsername(inputValue);
      setLoading(true);
      try {
        const { data } = await axios.post("/profile", {
          username,
        });
        dispatch(prevLinkProfile(inputValue));
        dispatch(profile(data));
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
      setLoading(false);
    }
  };

  const togglePortal = () => {
    dispatch(isModalOpen(!modal));
  };

  return (
    <>
      <MobileOnlyView viewClassName="mobile_container">
        <p>
          Download app from{" "}
          <a href="https://github.com/devyuji/isave-app/releases">here</a>
        </p>
      </MobileOnlyView>
      <Navbar />
      <Body fetch={fetch} inputValue={setInputValue} title={TITLE} />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <AnimatePresence>{error && <Error />}</AnimatePresence>
      {Object.keys(DATA).length > 0 && (
        <div className="profileContainer">
          <div onClick={togglePortal}>
            <img
              src={`data:image/png;base64,${DATA.profile_image_src}`}
              alt=""
            />
          </div>
          <div className="details">
            <h2>{DATA.username}</h2>
            <h2>Name: {DATA.name}</h2>
            <h2>Followers: {DATA.followers}</h2>
            <h2>Following: {DATA.following}</h2>
            <button
              className="btn"
              onClick={() => download(DATA.profile_image)}
            >
              download profile image
            </button>
          </div>
        </div>
      )}
      <Footer />
      <Preview imageLink={DATA.profile_image_src} />
    </>
  );
};

export default Profile;

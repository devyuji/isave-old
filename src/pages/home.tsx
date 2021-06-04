import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { MobileOnlyView } from "react-device-detect";

// components
import Navbar from "../components/header";
import Body from "../components/body";
import Card from "../components/card";
import Loading from "../components/loading";
import Footer from "../components/footer";

// redux
import { useDispatch, useSelector } from "react-redux";
import { post, prevLinkPost } from "../redux/action";
import Error from "../components/error";

const TITLE = "Download Instagram Videos, Images, And Reels In One Place.";

const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const DATA = useSelector((s: any) => s.POST_DATA);
  const prevInputValue = useSelector((s: any) => s.PREVLINK);

  // instagram url check
  const instagramUrlCheck = () => {
    const p = new RegExp("(https?://(?:www.)?instagram.com/p/([^/?#&]+)).*");
    const tv = new RegExp("(https?://(?:www.)?instagram.com/tv/([^/?#&]+)).*");
    const reel = new RegExp(
      "(https?://(?:www.)?instagram.com/reel/([^/?#&]+)).*"
    );

    if (inputValue.match(p) || inputValue.match(tv) || inputValue.match(reel))
      return true;

    return false;
  };

  const similarUrlCheck = () => {
    if (inputValue === prevInputValue.post) return false;

    return true;
  };

  // fetching data
  const fetch = async (e: any) => {
    e.preventDefault();
    const match = instagramUrlCheck();
    if (match && similarUrlCheck()) {
      setLoading(true);
      try {
        const { data } = await axios.post("/post", {
          url: inputValue,
        });
        dispatch(prevLinkPost(inputValue));
        dispatch(post(data));
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
      setLoading(false);
    }
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
      <Body inputValue={setInputValue} fetch={fetch} title={TITLE} />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <AnimatePresence>{error && <Error />}</AnimatePresence>
      <div className="card_Container">
        <Card data={DATA} />
      </div>
      <Footer />
    </>
  );
};

export default Home;

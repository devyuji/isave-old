import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { post } from "../redux/action";

const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [prevInputValue, setPrevInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const DATA = useSelector((s) => s);

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
    if (inputValue === prevInputValue) return false;

    return true;
  };

  // fetching data
  const fetch = async (e: any) => {
    e.preventDefault();
    const match = instagramUrlCheck();
    if (match && similarUrlCheck()) {
      setLoading(true);
      try {
        const { data } = await axios.post(
          "https://shielded-basin-48291.herokuapp.com/api/post",
          {
            url: inputValue,
          }
        );
        setPrevInputValue(inputValue);
        dispatch(post(data));
        setError(false);
      } catch (err) {
        setPrevInputValue("");
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
      <Body inputValue={setInputValue} fetch={fetch} />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="error_container"
          >
            <h1>
              check account type maybe its a private account try again later
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="card_Container">
        <Card data={DATA} />
      </div>
      <Footer />
    </>
  );
};

export default Home;

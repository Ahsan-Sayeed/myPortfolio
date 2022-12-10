import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import AutoType from "../../components/AutoType/AutoType";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../components/Modal/Modal";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();
  const [modalShow, setModalShow] = React.useState(false);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle mt-5 "
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                <AutoType>{greeting.subTitle}</AutoType>
              </p>

              <div className="portfolio-repo-btn-div">
                <button
                  className="button"
                  {...styles}
                  onClick={() => setModalShow(true)}
                >
                  Contact
                </button>
                <a
                  {...styles}
                  className="button text-white"
                  href={greeting.resumeLink}
                  style={{ marginLeft: "5px" }}
                >
                  See my Resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        theme={props}
      />
    </Fade>
  );
}

import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import InstagramEmbed from "react-instagram-embed";

const Instagram = ({ setView }) => {
  const [feed] = useState([
    `https://www.instagram.com/p/CFtZZiGAayG/`,
    `https://www.instagram.com/p/CE36fL7gjLH/`,
    `https://instagr.am/p/CD8uHoZg56y/`,
    `https://www.instagram.com/p/CDrDFB-A1o8/`,
    `https://www.instagram.com/p/CDOzSQtAqRz/`,
    `https://www.instagram.com/p/B7TvW1lgKDk/`,
    `https://www.instagram.com/p/B4NUILKAKwE/`,
    `https://www.instagram.com/p/B0U3RrJAn6-/`,
    `https://www.instagram.com/p/BwO1VwNAk6S/`,
    `https://www.instagram.com/p/BwEpizjgyOv/`,
    `https://instagr.am/p/CCq--regz9o/`,
    `https://instagr.am/p/CDrDFB-A1o8/`,
    `https://instagr.am/p/CDOzSQtAqRz/`,
    `https://www.instagram.com/p/B7YtOPbAsyD/`,
    `https://www.instagram.com/p/B5-fgp5AcTF/`,
    `https://www.instagram.com/p/B2EqTflAEEy/`,
    `https://www.instagram.com/p/BwTb05LAtrY/`,
    `https://www.instagram.com/p/BwJTW0PAh9G/`,
  ]);

  const API_KEY = process.env.REACT_APP_INSTA_API_KEY;

  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li className="list-group-item  active">Instagram</li>
            <li className="list-group-item" onClick={() => setView("youtube")}>
              Youtube
            </li>
            <li className="list-group-item" onClick={() => setView("gallery")}>
              Gallery
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-9 instagram-flow">
        <div className="instagram-feed">
          {feed.map((url) => (
            <div className="feed" key={url}>
              <InstagramEmbed
                url={url}
                clientAccessToken={API_KEY}
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Instagram;

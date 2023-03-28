import React from "react";
import readyConnect from "../../../../assets/images/ready-connect.svg";

import "./styles.scss";

const JoinCommunity = () => {
  return (
    <section className={`join-community`}>
      <div className="wrapper">
        <div className={`community-head`}>
          <p>JOIN OUR COMMUNITY</p>
          <h3>
            Are you ready to connect with the future talent of the tech world
          </h3>
          <p>Meet up with other techstars and grow together</p>
        </div>
        <div className={`image-wrapper`}>
          <img src={readyConnect} alt="" width="90%" />
        </div>

        <div className={`btn-wrapper`}>
          <button className={`btn-white btn-large`}>Join Our Community</button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;

import React from "react";
import "../App.css";
import blake from "../assest/blake.JPEG";
import blakeBike01 from "../assest/blake-bike-01.jpg";
import blakeBike02 from "../assest/blake-bike-02.jpg";
import blakeBike03 from "../assest/blake-bike-03.jpg";
import blakeBike04 from "../assest/blake-bike-04.jpg";
import blakeBike05 from "../assest/blake-bike-05.jpg";

export default function Workshop() {
  return (
    <>
      <div className="background-picture-1">
        <div className="intro-workshop">
          <div className="title-workshop">
            <h2>Blake Hunter</h2>
            <div className="inline-block">
              <img className="blake" src={blake} alt="blake"></img>
              <p>
                Blake is Midnight Cycles' founder. <br />
                After expending a few years working on the bike industry he
                decided to open his own workhop at his house.
                <br />
                One of his pasions is bikepacking and create amazing adventure
                bikes with old frames and give those frames a second life.
                <br />
                Here you can see some of Blakes' latest builds:
              </p>
            </div>
            <div className="images-bikes">
              <img className="blake" src={blakeBike01} alt="blake"></img>
              <img className="blake" src={blakeBike02} alt="blake"></img>
              <img className="blake" src={blakeBike03} alt="blake"></img>
              <img className="blake" src={blakeBike04} alt="blake"></img>
              <img className="blake" src={blakeBike05} alt="blake"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

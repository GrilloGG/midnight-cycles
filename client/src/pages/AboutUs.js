import React from "react";
import "../App.css";
import blake from "../assest/blake.JPEG";
import blakeBike01 from "../assest/blake-bike-01.jpg";
import blakeBike02 from "../assest/blake-bike-02.jpg";
import blakeBike03 from "../assest/blake-bike-03.jpg";
import blakeBike04 from "../assest/blake-bike-04.jpg";
import blakeBike05 from "../assest/blake-bike-05.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="background-picture-1">
        <div className="intro-workshop">
          <div>
            <div className="title-workshop">
              <p>
                Midnight Cycles has been operating since 2020. <br />
                We love promoting the art of bicycle maintenance and improving
                your rig. Come hang out and tell us about your dream build.
                Whether that be a modernised classic or a world tourer with
                dynamo and battery bank.
              </p>
              <h2>Blake Hunter</h2>
              <div className="">
                <img className="blake" src={blake} alt="blake"></img>
                <p>
                  Blake is Midnight Cycles' founder. <br />
                  After expending a few years working on the bike industry he
                  decided to open his own workhop at his house.
                  <br />
                  One of his pasions is bikepacking and create amazing adventure
                  bikes with old frames and give those frames a second life.
                  <br />
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
      </div>
    </>
  );
}

import React from "react";
import { PopupButton } from "react-calendly";
import "../App.css";

export default function Services() {
  return (
    <>
      <div className="services home-page-picture">
        <section className="service-card">
          <header>General Service - $80</header>
          <p>
            Our general service includes deep clean, lube, tune and safety check
            of the full bike.
            <br />
            <br />
            Parts list:
            <br /> - $10 Inner tube.
            <br /> - $7 Brake/gear cables.
            <br /> - $10 Cable and housing per line $30 Hydro bleed per line
            <br />
            <br />
            The list goes on as it gets bike specific, just message me for a
            quote!
          </p>
          <div className="pop-up-button">
            <PopupButton
              url="https://calendly.com/midnight-cycles/general-service"
              text={"Book now"}
              styles={{
                padding: "10px 20px",
                borderRadius: "40px",
                border: "none",
                backgroundColor: "#d96903",
                fontSize: "20px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <section className="service-card">
          <header>Bike Build - $150</header>
          <p>
            The work and attention to detail that goes into our restorations or
            frame swaps and custom builds is why this workshop exists.
            <br />
            <br />
            $180 for a bike build with fresh cables.
            <br />
            <br />
            Full custom build by quote.
            <br />
            <br /> Check out our social media for our quality vintage bikes and
            the latest high end custom gravel bikes.
          </p>
          <div className="pop-up-button">
            <PopupButton
              url="https://calendly.com/midnight-cycles/bike-build"
              text={"Book now"}
              styles={{
                padding: "10px 20px",
                borderRadius: "40px",
                border: "none",
                backgroundColor: "#d96903",
                fontSize: "20px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <section className="service-card">
          <header>General Enquiry - Free</header>
          <p>
            If you are unsure if your bike needs a full service or if you just
            need to have one or two things repaired please book a general
            enquiry with us.
            <br />
            <br />
            Out team will assest your bike with this 15min appoiment and
            disccuss all the problems that we spot.
            <br />
            <br />
            Full quote before any job is done on your bike.
            <br />
            <br />
          </p>
          <div className="pop-up-button">
            <PopupButton
              url="https://calendly.com/midnight-cycles/general-enquiry"
              text={"Book now"}
              styles={{
                padding: "10px 20px",
                borderRadius: "40px",
                border: "none",
                backgroundColor: "#d96903",
                fontSize: "20px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}

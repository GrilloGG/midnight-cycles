import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function index() {
  const iconFacebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const iconInstagram = <FontAwesomeIcon icon={faInstagramSquare} />;
  const iconWhatsapp = <FontAwesomeIcon icon={faWhatsappSquare} />;

  return (
    <>
      <footer className="footer">
        <div className="icons-footer">
          <p className="item-center">Copyright &copy; Midnight Cycles 2022 </p>
          <div className="social-media-icons">
            <a
              href={
                "https://www.facebook.com/midnight.bicycles/?ref=page_internal"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconFacebook}
            </a>
            <a
              href={"http://instagram.com/midnight.bicycles"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconInstagram}
            </a>
            <a
              href={
                "https://api.whatsapp.com/send?phone=61413790677&app=facebook&entry_point=page_cta&fbclid=IwAR3IR_PuAojWKNgmptUbRIAU1MLC1AxR2ClgxDmvOWOPo4OAcWXCFmXkg6c"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconWhatsapp}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

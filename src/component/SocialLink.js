import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function SocialLink(props) {
  return (
    <>
      <div className="social_media">
        {props.links.map((value, id) => {
          let icon;
          if (value.linkType === "call") {
            icon = faPhone;
          }
          if (value.linkType === "email") {
            icon = faEnvelope;
          }
          if (value.linkType === "website") {
            icon = "/safari.png";
          }
          if (value.linkType === "whatsapp") {
            icon = faWhatsapp;
          }
          if (value.linkType === "linkedin") {
            icon = faLinkedinIn;
          }
          if (value.linkType === "instagram") {
            icon = faInstagram;
          }
          if (value.linkType === "facebook") {
            icon = faFacebookF;
          }
          if (value.linkType === "twitter") {
            icon = faTwitter;
          }
          if (value.linkType === "youtube") {
            icon = faYoutube;
          }
          if (value.linkType === "address") {
            icon = "/googlemap.png";
          }

          return (
            <a key={id} href="/" className="social_media-link" target="blank">
              <div className="d-flex align-items-center gap-2">
                {/* {console.log(typeof icon)} */}
                {icon === "/googlemap.png" || icon === "/safari.png" ? (
                  <img className="img-fluid" src={icon} alt="" />
                ) : (
                  <span>
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )}
                <p>Instagram</p>
              </div>
              <FontAwesomeIcon icon={faShareSquare} />
            </a>
          );
        })}
        {/* <a href="/" className="social_media-link" target="blank">
          <div className="d-flex align-items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p>Instagram</p>
          </div>
          <FontAwesomeIcon icon={faShareSquare} />
        </a> */}
      </div>
    </>
  );
}

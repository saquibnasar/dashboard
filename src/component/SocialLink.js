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
          let link = value.titleInput;
          if (value.linkType === "call") {
            icon = faPhone;
            link = `tel:${value.titleInput}`;
          }
          if (value.linkType === "email") {
            icon = "/email.png";
            link = `mailto:${value.titleInput}`;
          }
          if (value.linkType === "website") {
            icon = "/safari.png";
          }
          if (value.linkType === "whatsapp") {
            icon = faWhatsapp;
            link = `https://wa.me:${value.titleInput}`;
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
            <a
              key={id}
              href={link}
              className={`social_media-link ${value.linkType}`}
              target="blank"
            >
              <div className="d-flex align-items-center gap-2">
                {icon === "/googlemap.png" ||
                icon === "/safari.png" ||
                icon === "/email.png" ? (
                  <img className="img-fluid" src={icon} alt="" />
                ) : (
                  <span>
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )}
                <p>{value.linkTitleInput}</p>
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

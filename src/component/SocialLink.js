import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
          let link = value.value;
          if (value.type === "phone") {
            icon = faPhone;
            link = `tel:${value.countryCode}${value.value}`;
          }
          if (value.type === "email") {
            icon = "/email.png";
            link = `mailto:${value.value}`;
          }
          if (value.type === "website") {
            icon = "/safari.png";
          }
          if (value.type === "whatsapp") {
            icon = faWhatsapp;
            link = `https://wa.me:${value.value}`;
          }
          if (value.type === "linkedin") {
            icon = faLinkedinIn;
          }
          if (value.type === "instagram") {
            icon = faInstagram;
          }
          if (value.type === "facebook") {
            icon = faFacebookF;
          }
          if (value.type === "twitter") {
            icon = faTwitter;
          }
          if (value.type === "youtube") {
            icon = faYoutube;
          }
          if (value.type === "googlemap") {
            icon = "/googlemap.png";
          }

          return value.isActive ? (
            <a
              key={id}
              href={link}
              className={`social_media-link ${value.type}`}
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
                <p>{value.title}</p>
              </div>
              <FontAwesomeIcon icon={faShareSquare} />
            </a>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}

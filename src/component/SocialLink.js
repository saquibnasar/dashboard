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
              {icon === "/googlemap.png" ||
              icon === "/safari.png" ||
              icon === "/email.png" ? (
                <img className="img-fluid" src={icon} alt="" />
              ) : (
                <span>
                  <FontAwesomeIcon icon={icon} />
                </span>
              )}
              {value.title}
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#202124"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="#202124"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="#202124"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {/* <FontAwesomeIcon icon={faShareSquare} /> */}
              </div>
            </a>
          ) : (
            // <a
            //   key={id}
            //   href={link}
            //   className={`social_media-link ${value.type}`}
            //   target="blank"
            // >
            //   <div className="d-flex align-items-center gap-2">
            //     {icon === "/googlemap.png" ||
            //     icon === "/safari.png" ||
            //     icon === "/email.png" ? (
            //       <img className="img-fluid" src={icon} alt="" />
            //     ) : (
            //       <span>
            //         <FontAwesomeIcon icon={icon} />
            //       </span>
            //     )}
            //     <p>{value.title}</p>
            //   </div>
            //   <FontAwesomeIcon icon={faShareSquare} />
            // </a>
            ""
          );
        })}
      </div>
    </>
  );
}

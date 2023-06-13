import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
export default function SocialLink(props) {
  return (
    <>
      <div className="social_media">
        {/* {props.StandardLinks.map((value, id) => {
          let icon = faInstagram;
          return (
            <a
              key={id}
              href={"fd"}
              className="social_media-link"
              target="blank"
              rel="noopener noreferrer"
            >
              {icon ? (
                <FontAwesomeIcon icon={icon} />
              ) : (
                <img
                  className="img-fluid"
                  src={`/social_icon/${value.url.toLowerCase()}.svg`}
                  alt=""
                />
              )}
            </a>
          );
        })} */}
        <a href="/" className="social_media-link" target="blank">
          <div className="d-flex align-items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p>Instagram</p>
          </div>
          <FontAwesomeIcon icon={faShareSquare} />
        </a>
        <a href="/" className="social_media-link" target="blank">
          <div className="d-flex align-items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p>Instagram</p>
          </div>
          <FontAwesomeIcon icon={faShareSquare} />
        </a>
        <a href="/" className="social_media-link" target="blank">
          <div className="d-flex align-items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p>Instagram</p>
          </div>
          <FontAwesomeIcon icon={faShareSquare} />
        </a>
        <a href="/" className="social_media-link" target="blank">
          <div className="d-flex align-items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p>Instagram</p>
          </div>
          <FontAwesomeIcon icon={faShareSquare} />
        </a>
      </div>
    </>
  );
}

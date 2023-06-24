import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function LInks(props) {
  return (
    <>
      <dv className="linkPage">
        <button className="btn-link" onClick={props.addLin}>
          <FontAwesomeIcon icon={faPlus} />
          Add info
        </button>
        <div className="addcard_links">
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>Call</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/email.png" alt="" />
            </div>
            <p>Email</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/safari.png" alt="" />
            </div>
            <p>Website</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <p>Whatsapp</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <p>LinkedIn</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <p>Instagram</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <p>Facebook</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <p>Twitter</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <p>Youtube</p>
          </div>
          <div className="addcard_link">
            <FontAwesomeIcon icon={faGripVertical} />
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/googlemap.png" alt="" />
            </div>
            <p>Address</p>
          </div>
        </div>
      </dv>
    </>
  );
}

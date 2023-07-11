import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddLink from "../AddLink";

export default function AddPlugin(props) {
  const [linkData, setLinkData] = useState({});
  const [isClick, setIsClick] = useState(false);

  const sendData = (data) => {
    setLinkData(data);
    setIsClick(!isClick);
  };
  return (
    <>
      <div className="addcard addPlugin">
        <div className="addcard_container">
          {!isClick ? (
            <div>
              <div
                className="addlink-back"
                onClick={() => {
                  props.removeLink(!props.isPlugin);
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </div>
              <h1>Add content to card</h1>
              <p className="addcard_container-para">
                Select from our wide variety of links and contact info below
              </p>
              <div className="addcard_links">
                <div
                  className={`addcard_link youtube`}
                  onClick={sendData.bind(this, {
                    headerTitle: "Youtube Title",
                    linkTitleInput: "Youtube",
                    title: "Youtube*",
                    titleInput: "Enter Youtube URl",
                    type: "text",
                    linktype: "youtube",
                    icon: faYoutube,
                  })}
                >
                  <div className="addcard_link-item">
                    <div className="addcard_link-item-icon">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <p>Youtube</p>
                  </div>

                  <div className="addcard_link-add">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <AddLink
              data={linkData}
              sendData={sendData}
              setFormData={props.setFormData}
            />
          )}
        </div>
      </div>
    </>
  );
}

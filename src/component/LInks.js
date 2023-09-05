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
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddLink from "./AddLink";

export default function LInks(props) {
  const [isLinkClick, setIsLinkClick] = useState(false);
  const [linkData, setLinkData] = useState({});
  const [alertText, setAlertText] = useState("");
  const handleChange = (id, e) => {
    // e.cancelBubble = true;
    props.setFormData((prevformData) => {
      let newArr = [...prevformData.userLink];
      if (prevformData.userLink[id].id) {
        newArr[id] = {
          title: prevformData.userLink[id].title,
          value: prevformData.userLink[id].value,
          type: prevformData.userLink[id].type,
          isActive: e.target.checked,
          countryCode: prevformData.userLink[id].countryCode,
          id: prevformData.userLink[id].id,
          memberId: prevformData.userLink[id].memberId,
        };
      } else {
        newArr[id] = {
          title: prevformData.userLink[id].title,
          value: prevformData.userLink[id].value,
          type: prevformData.userLink[id].type,
          isActive: e.target.checked,
          countryCode: prevformData.userLink[id].countryCode,
        };
      }

      return {
        ...prevformData,
        userLink: [...newArr],
      };
    });
  };
  const handleDelete = (id, event) => {
    console.log(id);
    props.setFormData((prevformData) => {
      prevformData.userLink.splice(id, 1);
      return { ...prevformData };
    });
  };

  const updateLink = (link, id, event) => {
    setIsLinkClick(!isLinkClick);
    setLinkData(() => {
      if (link && link.type && link.type === "phone") {
        return {
          headerTitle: "Phone",
          linkTitleInput: "phone",
          title: "Phone Number*",
          titleInput: "Enter Phone Number*",
          type: "number",
          type: "phone",
          icon: faPhone,
          linkData: link.value,
          linkTitle: link.title,
          countryCode: link.countryCode,
          countryCode: link.countryCode ? link.countryCode : "1",
          id: id,
        };
      } else if (link && link.type && link.type === "email") {
        return {
          headerTitle: "Link Title",
          linkTitleInput: "email",
          title: "Email",
          titleInput: "Enter Email",
          type: "email",
          type: "email",
          icon: "/email.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "website") {
        return {
          headerTitle: "Website Title",
          linkTitleInput: "Website",
          title: "Website*",
          titleInput: "Enter Website URL",
          type: "text",
          type: "website",
          icon: "/safari.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "whatsapp") {
        return {
          headerTitle: "Whatsapp Title",
          linkTitleInput: "Whatsapp",
          title: "Whatsapp*",
          titleInput: "Enter Whatsapp Number",
          type: "text",
          type: "whatsapp",
          icon: faWhatsapp,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "linkedin") {
        return {
          headerTitle: "Linkedin Title",
          linkTitleInput: "Linkedin",
          title: "Linkedin*",
          titleInput: "Enter Linkedin URl",
          type: "text",
          type: "linkedin",
          icon: faLinkedinIn,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "instagram") {
        return {
          headerTitle: "Instagram Title",
          linkTitleInput: "Instagram",
          title: "Instagram*",
          titleInput: "Enter Instagram URl",
          type: "text",
          type: "instagram",
          icon: faInstagram,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "facebook") {
        return {
          headerTitle: "Facebook Title",
          linkTitleInput: "Facebook",
          title: "Facebook*",
          titleInput: "Enter Facebook URl",
          type: "text",
          type: "facebook",
          icon: faFacebookF,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "twitter") {
        return {
          headerTitle: "Twitter Title",
          linkTitleInput: "Twitter",
          title: "Twitter*",
          titleInput: "Enter Twiter URL",
          type: "text",
          type: "twitter",
          icon: faTwitter,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "googlemap") {
        return {
          headerTitle: "Address Title",
          linkTitleInput: "Address",
          title: "Address*",
          titleInput: "Enter Address",
          type: "text",
          type: "googlemap",
          icon: "/googlemap.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "youtube") {
        return {
          headerTitle: "Youtube Title",
          linkTitleInput: "Youtube",
          title: "Youtube*",
          titleInput: "Enter Youtube URl",
          type: "text",
          type: "youtube",
          icon: faYoutube,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      }
    });
  };

  return (
    <>
      {isLinkClick ? (
        <div className="addcard">
          <div className="addcard_container">
            <AddLink
              data={linkData}
              sendData={updateLink}
              setFormData={props.setFormData}
              formData={props.formData}
              setAlertText={setAlertText}
            />
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      <div className={isLinkClick ? "links d-none" : "links"}>
        <div className="linkPage">
          <button className="btn-link" onClick={props.addLin}>
            <FontAwesomeIcon icon={faPlus} />
            Add info
          </button>

          <div className="addcard_links">
            {props.formData && props.formData.userLink
              ? props.formData.userLink.map((value, key) => {
                  let link = faWhatsapp;
                  if (value.type === "phone") {
                    link = faPhone;
                  } else if (value.type === "whatsapp") {
                    link = faWhatsapp;
                  } else if (value.type === "linkedin") {
                    link = faLinkedinIn;
                  } else if (value.type === "instagram") {
                    link = faInstagram;
                  } else if (value.type === "facebook") {
                    link = faFacebookF;
                  } else if (value.type === "twitter") {
                    link = faTwitter;
                  } else if (value.type === "youtube") {
                    link = faYoutube;
                  } else if (value.type === "website") {
                    link = "/safari.png";
                  } else if (value.type === "googlemap") {
                    link = "/googlemap.png";
                  } else if (value.type === "email") {
                    link = "/email.png";
                  }
                  return (
                    <div
                      className={`addcard_link ${value.type}`}
                      onClick={(event) => {
                        updateLink(value, key, event);
                      }}
                    >
                      <div className="addcard_link_dot">
                        <svg
                          width="8"
                          height="16"
                          fill="#82828290"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                        >
                          <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
                        </svg>
                      </div>
                      <div className="addcard_link-item-icon">
                        {value.type === "email" ||
                        value.type === "website" ||
                        value.type === "googlemap" ? (
                          <img className="img-fluid" src={link} alt="" />
                        ) : (
                          <FontAwesomeIcon icon={link} />
                        )}
                      </div>
                      <p>{value.title}</p>
                      <div className="addcard_link-edit">
                        {!value.isActive ? (
                          <div
                            className="addcard_link-delete"
                            onClick={handleDelete.bind(this, key)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        ) : (
                          ""
                        )}

                        <button type="button" className="form-check">
                          <input
                            type="checkbox"
                            id={key}
                            onChange={handleChange.bind(this, key)}
                            checked={value.isActive}
                            // // value={value.isActive}
                            // value={value.isActive}
                          />
                          <label htmlFor={key}></label>
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

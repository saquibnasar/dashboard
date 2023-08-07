import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Alert(props) {
  return (
    <>
      <div className="alert">
        <div className="icon">
          <FontAwesomeIcon icon={faExclamationCircle} />
        </div>
        <p className="alertText">{props.alertText}</p>
        <button
          className="alertClose"
          type="button"
          onClick={() => {
            props.setAlertText("");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </>
  );
}

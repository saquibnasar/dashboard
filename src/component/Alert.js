import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ALert(props) {
  return (
    <>
      <div class="alert">
        <div class="icon">
          <FontAwesomeIcon icon={faExclamationCircle} />
        </div>
        <p class="alertText">{props.alertText}</p>
        <button class="alertClose" type="button" onClick={()=>{props.setAlert("")}}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </>
  );
}

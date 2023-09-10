import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Modal(props) {
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <h1>Are you sure you wanna delete this?</h1>
          <p>
            Are you sure you want to delete{" "}
            {props.type === "remove" ? "this link" : "this member"}{" "}
          </p>
          <div className="btn-container">
            <button
              className="btn close"
              type="button"
              onClick={() => {
                props.setIsModal(false);
              }}
            >
              Close
            </button>
            <button
              className="btn delete"
              type="button"
              onClick={() => {
                props.setIsModal(false);
                props.deleteHander();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function TeamCard(props) {
  return (
    <>
      {!props.mode ? (
        <div className="teamCard row gap-3">
          <Link to="/homepage" className="teamCard_btn col-3">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <h3>Harsh Vardhan</h3>
            <h4>CTO at Investors Clinic</h4>
            <div className="d-flex gap-2">
              <button className="editCard">
                <FontAwesomeIcon icon={faPencil} />
                Edit Card
              </button>
              <button className="ShareCard">
                <FontAwesomeIcon icon={faShareSquare} />
                Share Card
              </button>
            </div>
          </Link>

          <Link to="/createCard" className="add_btn col-3">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <p>Create New Cards</p>
          </Link>
        </div>
      ) : (
        <div className="teamCard row gap-3 teamCard_list">
          <Link className="teamCard_btn" to="/homepage">
            <div className="d-flex flex-direction-column">
              <h3>Harsh Vardhan</h3>
              <h4>CTO at Investors Clinic</h4>
            </div>
            <div className="d-flex gap-1">
              <button className="editCard">
                <FontAwesomeIcon icon={faPencil} />
                Edit Card
              </button>
              <button className="ShareCard">
                <FontAwesomeIcon icon={faShareSquare} />
                Share Card
              </button>
            </div>
          </Link>
          <Link to="/createCard" className="add_btn col-3">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <p>Create New Cards</p>
          </Link>
        </div>
      )}
    </>
  );
}

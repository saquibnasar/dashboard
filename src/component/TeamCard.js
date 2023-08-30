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
      {props.mode ? (
        <div className="teamCard row gap-3">
          <Link to="/createCard" className="add_btn col-lg-6 col-md-12 col-4">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <p>Create New Cards</p>
          </Link>
          {props.data ? (
            <>
              {props.data
                .filter((item) => {
                  return props.search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(props.search);
                })
                .map((value) => {
                  return (
                    <Link
                      key={value.id}
                      className="teamCard_btn col-lg-6 col-md-12 col-4"
                      to="/homepage/content"
                    >
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>

                      {/* <div className="">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <div className="d-flex gap-2 f-sm400-direction-column">
                      <button className="editCard">
                        <FontAwesomeIcon icon={faPencil} />
                        Edit Card
                      </button>
                      <button className="ShareCard">
                        <FontAwesomeIcon icon={faShareSquare} />
                        Share Card
                      </button>
                    </div>
                  </div> */}

                      <h3>{value.first_name}</h3>
                      <h4>{value.last_name}</h4>
                      <div className="d-flex gap-2 f-sm400-direction-column">
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
                  );
                })}
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="teamCard row gap-3 teamCard_list">
          <Link to="/createCard" className="add_btn">
            <p>Create New Cards</p>
            <button className="editCard">
              add
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {/* <span>
              <FontAwesomeIcon icon={faPlus} />
            </span> */}
          </Link>
          {props.data ? (
            <>
              {props.data
                .filter((item) => {
                  return props.search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(props.search);
                })
                .map((value) => {
                  console.log(value);
                  return (
                    <Link
                      key={value.id}
                      className="teamCard_btn"
                      to={`/homepage/content/${value.employeeId}`}
                    >
                      <div className="d-flex gap-2">
                        <span className="mx-auto">
                          {value.profileImage &&
                          !(
                            value.profileImage === "null" ||
                            value.profileImage === "undefined"
                          ) ? (
                            <img
                              src={`${value.profileImage}`}
                              className="img-fluid"
                              alt=""
                            />
                          ) : (
                            <FontAwesomeIcon icon={faUser} />
                          )}
                        </span>
                        <div className="d-flex flex-direction-column gap-2">
                          <h3>{value.name}</h3>
                          <h4 className="mx-auto">
                            {value.officeEmailId &&
                            !(
                              value.officeEmailId === "null" ||
                              value.officeEmailId === "undefined"
                            )
                              ? value.officeEmailId
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <div className="d-flex gap-2 align-items-center f-md-column">
                        <button className="editCard">
                          Edit
                          <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <Link to="/a" className="ShareCard">
                          Share
                          <FontAwesomeIcon icon={faShareSquare} />
                        </Link>
                      </div>
                    </Link>
                  );
                })}
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

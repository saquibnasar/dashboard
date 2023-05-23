import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
export default function SIdebar() {
  return (
    <nav className="sidebar">
      <Link className="sidebar-brand" to="/">
        <img className="img-fluid" src="/logofill.svg" alt="" />
      </Link>

      <div className="sidebar-collapse">
        <ul className="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              <FontAwesomeIcon icon={faUser} />
              <p className="d-xl-none">My Cards </p>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/devices">
              <FontAwesomeIcon icon={faNfcSymbol} />
              <p className="d-xl-none">Devices</p>
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="https://caard.mini.store/"
            >
              <FontAwesomeIcon icon={faBasketShopping} />{" "}
              <div className="d-flex gap-2 d-xl-none">
                <p>Get Flax Devices</p> <FontAwesomeIcon icon={faShareSquare} />{" "}
              </div>
            </a>
          </li>
          <li className="nav-box d-xl-none"></li>
          <li className="nav-item">
            <NavLink
              className={
                window.location.pathname.split("/")[1] === "setting"
                  ? "nav-link active"
                  : "nav-link"
              }
              aria-current="page"
              to="/setting/team"
            >
              <FontAwesomeIcon icon={faGear} />
              <p className="d-xl-none">Settings</p>
            </NavLink>
          </li>
        </ul>

        <button className="btn btn-primary">
          <span className="d-xl-block d-none">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
          <p className="d-xl-none">Upgrade Now </p>
        </button>
      </div>
    </nav>
  );
}

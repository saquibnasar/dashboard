import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function TeamCard(props) {
  const data = [
    {
      id: 1,
      first_name: "Wilmette fdaaad",
      last_name: "Maasz",
      email: "wmaasz0@jalbum.net",
      phone: "130-309-6439",
    },
    {
      id: 2,
      first_name: "Morry",
      last_name: "Heater",
      email: "mheater1@yale.edu",
      phone: "814-809-2958",
    },
    {
      id: 3,
      first_name: "Laverne",
      last_name: "MacMorland",
      email: "lmacmorland2@webnode.com",
      phone: "271-342-7249",
    },
    {
      id: 4,
      first_name: "Cindee",
      last_name: "De Freitas",
      email: "cdefreitas3@privacy.gov.au",
      phone: "617-624-6967",
    },
    {
      id: 5,
      first_name: "Carole",
      last_name: "Reffe",
      email: "creffe4@nih.gov",
      phone: "738-966-3137",
    },
    {
      id: 6,
      first_name: "Ansel",
      last_name: "Iwanicki",
      email: "aiwanicki5@pagesperso-orange.fr",
      phone: "716-371-2467",
    },
    {
      id: 7,
      first_name: "Herold",
      last_name: "Mungham",
      email: "hmungham6@goodreads.com",
      phone: "659-298-5396",
    },
    {
      id: 8,
      first_name: "Sibeal",
      last_name: "Andreacci",
      email: "sandreacci7@bloomberg.com",
      phone: "508-876-5450",
    },
    {
      id: 9,
      first_name: "Eustacia",
      last_name: "Matteuzzi",
      email: "ematteuzzi8@rakuten.co.jp",
      phone: "953-375-3684",
    },
    {
      id: 10,
      first_name: "Tiebold",
      last_name: "Powe",
      email: "tpowe9@dmoz.org",
      phone: "574-154-1045",
    },
    {
      id: 11,
      first_name: "Deloris",
      last_name: "Flintoffe",
      email: "dflintoffea@usa.gov",
      phone: "281-262-2474",
    },
    {
      id: 12,
      first_name: "Janela",
      last_name: "Coite",
      email: "jcoiteb@columbia.edu",
      phone: "241-621-1528",
    },
    {
      id: 13,
      first_name: "Ines",
      last_name: "Ginity",
      email: "iginityc@studiopress.com",
      phone: "924-888-0857",
    },
    {
      id: 14,
      first_name: "Godfree",
      last_name: "Bastistini",
      email: "gbastistinid@pen.io",
      phone: "694-172-1204",
    },
    {
      id: 15,
      first_name: "Jazmin",
      last_name: "Exrol",
      email: "jexrole@networkadvertising.org",
      phone: "265-313-4188",
    },
    {
      id: 16,
      first_name: "Sacha",
      last_name: "Sidwick",
      email: "ssidwickf@home.pl",
      phone: "960-987-8058",
    },
    {
      id: 17,
      first_name: "Leonhard",
      last_name: "Capron",
      email: "lcaprong@zimbio.com",
      phone: "585-187-8345",
    },
    {
      id: 18,
      first_name: "My",
      last_name: "Raiment",
      email: "mraimenth@abc.net.au",
      phone: "557-179-7329",
    },
    {
      id: 19,
      first_name: "Riley",
      last_name: "Botting",
      email: "rbottingi@diigo.com",
      phone: "684-766-2752",
    },
    {
      id: 20,
      first_name: "Daron",
      last_name: "Pinkney",
      email: "dpinkneyj@redcross.org",
      phone: "872-837-1696",
    },
    {
      id: 21,
      first_name: "Susi",
      last_name: "Leipelt",
      email: "sleipeltk@reference.com",
      phone: "921-979-2052",
    },
  ];

  return (
    <>
      {!props.mode ? (
        <div className="teamCard row gap-3">
          {data
            .filter((item) => {
              return props.search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(props.search);
            })
            .map((value) => {
              return (
                <Link className="teamCard_btn col-3" to="/homepage">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <h3>{value.first_name}</h3>
                  <h4>{value.last_name}</h4>
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
              );
            })}

          <Link to="/createCard" className="add_btn col-3">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <p>Create New Cards</p>
          </Link>
        </div>
      ) : (
        <div className="teamCard row gap-3 teamCard_list">
          {data
            .filter((item) => {
              return props.search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(props.search);
            })
            .map((value) => {
              return (
                <Link className="teamCard_btn col-3" to="/homepage">
                  <div className="d-flex flex-direction-column">
                    <h3>{value.first_name}</h3>
                    <h4>{value.last_name}</h4>
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
              );
            })}

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

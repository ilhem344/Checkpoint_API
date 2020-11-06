import React from "react";
import "jquery";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ id, name, Username }) {
  return (
    <div className="Card">
      {name ? (
        <p>
          {" "}
          <span className="intro"> Name </span> : {name}
        </p>
      ) : (
        <p> Name :NOT FOUND</p>
      )}
      {Username ? (
        <p>
          <span className="intro"> Username </span> : {Username}
        </p>
      ) : (
        <p> Username:NOT FOUND </p>
      )}

      <Link to={`/${id}`}>
        <button>More details</button>
      </Link>
    </div>
  );
}

export default Card;

import React from "react";
import "jquery";
import "../card/card.css";

function SecondCard({ name, Username, email, phone, Website }) {
  return (
    <div className="Card">
      {name ? (
        <p>
          {" "}
          <span className="intro">Name</span> :{name}
        </p>
      ) : (
        <p> Name :NOT FOUND</p>
      )}
      {Username ? (
        <p>
          <span className="intro">Username </span>: {Username}
        </p>
      ) : (
        <p> Username:NOT FOUND </p>
      )}
      {email ? (
        <p>
          <span className="intro">Email </span>: {email}
        </p>
      ) : (
        <p>Email : NOt FOUND</p>
      )}
      {phone ? (
        <p>
          <span className="intro">Phone </span>:{phone}
        </p>
      ) : (
        <p>Phone :NOT FOUND</p>
      )}
      {Website ? (
        <p>
          {" "}
          <span className="intro">Website</span>:{Website}
        </p>
      ) : (
        <p>Website:NOT FOUND</p>
      )}
    </div>
  );
}

export default SecondCard;

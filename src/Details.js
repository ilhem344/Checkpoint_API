import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import SecondCard from "./Card2/SecondCard";

function Details(props) {
  const [Details, setDetails] = useState([]);
  let id = props.match.params.id;
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => {
        setDetails(res.data);
      }
    );
  }, [id]);
  return (
    <div style={{ margin: "auto auto", marginTop: "100px" }}>
      <SecondCard
        email={Details.email}
        name={Details.name}
        Username={Details.username}
        Website={Details.website}
        phone={Details.phone}
      />
      {console.log(Details)}
    </div>
  );
}

export default Details;

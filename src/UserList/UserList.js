import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/card";
import "./UserList.css";

function UserList() {
  const [ListUser, setListUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setListUser(res.data);
    });
  };
  return (
    <div className="userList">
      {ListUser.map((el) => (
        <div key={el.id}>
          {" "}
          <Card Username={el.username} name={el.name} id={el.id} />
        </div>
      ))}
    </div>
  );
}

export default UserList;

import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import SearchContact from "./SearchContact";
import Users from "./Users";
import Popup from "./Popup";

const Contacts = () => {

// state to store user
  const [users, setUsers] = useState([]);
  const [popup, setPopup] = useState(false)

//   function to retrieve 20 users from random-data-api
  const getUsers = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user/?size=20"
    );
    const data = await response.json();
    setUsers(data)
  };

//   runs getUsers() function on page load
  useEffect(() => {
    getUsers();
    console.log(JSON.stringify(users[0]))
  }, []);

  return (
    <div>
        <SearchContact />
        <Users users={users}/>
        {popup && <Popup />}
    </div>
  );
};

export default Contacts;

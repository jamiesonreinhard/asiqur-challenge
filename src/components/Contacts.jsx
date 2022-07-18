import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import SearchContact from "./SearchContact";

const Contacts = () => {

// state to store user
  const [users, setUsers] = useState([]);

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
  }, []);

  return (
    <div>
        <SearchContact />
    </div>
  );
};

export default Contacts;

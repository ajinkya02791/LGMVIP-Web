import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const responseJson = await response.json();
    setUsers(responseJson);
  };

  const cols =
    users.data &&
    users.data.map((user, index) => (
      <div className="col">
        <div key={index} className="card">
          <div>
            <img className="img" src={user.avatar} alt="user-avatar" />
            <div className="card-body">
              <h5>
                {" "}
                {user.first_name} {user.last_name}{" "}
              </h5>
              <h5>User Id: {user.id}</h5>
              <h5> E-mail : {user.email} </h5>
              <hr />
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="App">
      <h1>Hello Everyone.</h1>
      <button onClick={fetchUserData} id="getUser">
        Get Users
      </button>
      <div className="rows"> {users.data && cols} </div>{" "}
    </div>
  );
}

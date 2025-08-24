import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      if (!response.ok) throw new Error("HTTP error! status: " + response.status);

      const responseJson = await response.json();
      setUsers(responseJson.data);
    } catch (err) {
      console.error("❌ Fetch failed:", err);
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Hello Everyone.</h1>
      <button onClick={fetchUserData}>Get Users</button>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      <div className="rows">
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card">
              <img className="img" src={user.avatar} alt={`${user.first_name} avatar`} />
              <div className="card-body">
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <p>User Id: {user.id}</p>
                <p>E-mail: {user.email}</p>
                <hr />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
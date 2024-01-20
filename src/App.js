import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
import ProfilePage from "./Components/ProfilePage";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState(null);

  const handleLogin = (id) => {
    setUserId(id);
  };

  return (
    <div className="app">
      {!userId ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ProfilePage userId={userId} />
      )}
    </div>
  );
};

export default App;

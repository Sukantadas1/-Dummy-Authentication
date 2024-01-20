import React, { useState, useEffect } from "react";
import "../ProfilePage.css";

const ProfilePage = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();

        if (response.ok) {
          // Save user object in local storage
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
        } else {
          // Handle error
          alert(data.message);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

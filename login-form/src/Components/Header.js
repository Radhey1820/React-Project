import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./header.scss";

function Header(props) {
  const [username, setUsername] = useState("");

  const handleCallBack = (childData) => {
    setUsername(childData);
  };
  return (
    <>
      <div className="logindiv">
        <h1>Login Form</h1>
        <LoginForm handleCallBack={handleCallBack} />
      </div>
      <div className="headerdiv">
        <h1>Welcome {username}...</h1>
      </div>
    </>
  );
}

export default Header;

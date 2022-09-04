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
        <LoginForm handleCallBack={handleCallBack} />
      </div>
      <div>
        <h1>Welcome {username}...</h1>
      </div>
    </>
  );
}

export default Header;

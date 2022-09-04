import React from "react";
import LoginForm from "./LoginForm";

function Header(props) {
  return (
    <>
      <div>
        <h1>Welcome...</h1>
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default Header;

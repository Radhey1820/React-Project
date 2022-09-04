import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import RegisterUser from "./Modals/RegisterUser";
import "./loginform.scss";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
    if (
      username === localStorage.getItem("name") &&
      pass === localStorage.getItem("pass")
    ) {
      props.handleCallBack(username);
      console.log("Name sended!");
    } else {
      alert("Username and password didn't match!! Kindly register");
    }
  };
  return (
    <>
      <div className="formdiv">
        <Form className="myform">
          <Form.Group className="mb-3">
            <Form.Label>Username :</Form.Label>
            <Form.Control
              type="text"
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              placeholder={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Button className="loginbtn" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      <div className="myregisterform">
        <p>
          If you are new user{" "}
          <span>
            <Button className="registerbtn" onClick={handleModalOpen}>
              Register Here
            </Button>
          </span>
        </p>
      </div>
      <RegisterUser modalOpen={modalOpen} handleModalOpen={handleModalOpen} />
    </>
  );
}

export default LoginForm;

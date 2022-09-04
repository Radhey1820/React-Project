import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function RegisterUser(props) {
  const { modalOpen, handleModalOpen } = props;

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = () => {
    console.log("values stored in local storage");
    alert("User Registered!");
    handleModalOpen(!modalOpen);
  };

  const handleClose = () => {
    handleModalOpen(!modalOpen);
  };

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("pass", pass);
  }, [name, pass]);

  return (
    <div>
      <Modal show={props.modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegisterUser;

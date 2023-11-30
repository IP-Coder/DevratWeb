import React from "react";
import { Modal, Spinner } from "react-bootstrap";

const SignupModal = ({ show }) => {
  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Header>
        <Modal.Title>Please wait...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>We are processing your request.Please wait</p>
        <Spinner animation="border" />
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;

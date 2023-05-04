import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";
import logo from "../assets/images/favicon_io_logo_dark_transparent_png/favicon-32x32.png";

export function ToastSuccess() {
  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <Toast
      bg={"success"}
      show={showToast}
      onClose={toggleShowToast}
      autohide
      delay={10000}
      className="toast"
    >
      <Toast.Header>
        <img src={logo} className="rounded me-2" alt="Pizza Baby logo" />
        <strong className="me-auto">Form submission result:</strong>
      </Toast.Header>
      <Toast.Body>
        Successful submission
      </Toast.Body>
    </Toast>
  );
}

export function ToastFailure() {
  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <Toast
      bg={"danger"}
      show={showToast}
      onClose={toggleShowToast}
      autohide
      delay={10000}
      className="toast"
    >
      <Toast.Header>
        <img src={logo} className="rounded me-2" alt="Pizza Baby logo" />
        <strong className="me-auto">Form submission result:</strong>
      </Toast.Header>
      <Toast.Body>
        Hmm, there seems to be an issue in submitting the form. Please call and
        let us know!
      </Toast.Body>
    </Toast>
  );
}

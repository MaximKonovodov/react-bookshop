import React, { useState, useEffect } from "react";

import Toast from "react-bootstrap/Toast";

const ToastMessage = (props) => {
  const parDivStyles = {
    position: "absolute",
    top: 100,
    right: 10,
    width: "250px",
    minHeight: "200px",
    zIndex: 5,
  };

  const [show, toggleShow] = useState(false);

  useEffect(() => {
    if (props.errors) {
      toggleShow(true);
    }
  }, [props.errors]);

  return (
    <div aria-live="polite" aria-atomic="true" style={parDivStyles}>
      <Toast
        className="bg-dark text-light"
        show={show}
        onClose={() => {
          toggleShow(!show);
          props.clearError();
        }}
        delay={2000}
        autohide
      >
        <Toast.Body>{props.errors}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastMessage;

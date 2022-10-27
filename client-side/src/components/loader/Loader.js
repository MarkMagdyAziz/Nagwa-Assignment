import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="container d-flex justify-content-center  align-items-center align-content-center mt-5 pt-5">
      <Spinner animation="border" variant="primary" /> <br />
    </div>
  );
}

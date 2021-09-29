import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error__header">404</h1>
      <p className="error__message">Page not found.</p>
    </div>
  );
}

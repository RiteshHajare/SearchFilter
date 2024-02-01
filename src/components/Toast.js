import React from "react";

function Toast({ showToast, setShowToast, toastState }) {
  return (
    <div
      className={`myToast toast ${showToast ? "show" : ""}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="me-auto">
          {toastState.success ? "success" : "error"}
        </strong>
        <button
          onClick={() => setShowToast(false)}
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{toastState.message}</div>
    </div>
  );
}

export default Toast;

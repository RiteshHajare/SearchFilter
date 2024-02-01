import React, { useState } from "react";
import Toast from "./Toast";
import { useNavigate } from "react-router-dom";

function Form({ movieName }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    tickets: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastState, setToastState] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    if (
      !form.city ||
      !form.country ||
      !form.firstName ||
      !form.lastName ||
      !form.state ||
      !form.tickets
    ) {
      setToastState({ success: false, message: "Please fill all values" });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return;
    }
    localStorage.setItem("form", form);
    setToastState({ success: true, message: "Form saved to local storage" });
    setShowToast(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className=" formscreen d-flex justify-content-center align-items-center">
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        toastState={toastState}
      />
      <form className="formcard">
        <h1 className="text-center my-4">Movie : {movieName} </h1>
        <div className="row mb-4 namerow">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form6Example1"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form6Example2"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            placeholder="City"
            name="city"
            id="form6Example4"
            className="form-control"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            placeholder="State"
            name="state"
            id="form6Example5"
            className="form-control"
            value={form.state}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            name="country"
            placeholder="Country"
            id="form6Example3"
            className="form-control"
            value={form.country}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="number"
            name="tickets"
            placeholder="number of tickets"
            id="form6Example6"
            className="form-control"
            onChange={handleChange}
            value={form.tickets}
          />
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleClick}
        >
          Place order
        </button>
      </form>
    </div>
  );
}

export default Form;

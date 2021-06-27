import React, { useState } from "react";
import "./index.css";

function InputView() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  const [contact, setContact] = useState({ email: " ", mobile: " " });

  const getFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
    console.log(name.firstName);
  };

  const getLastName = (e) => {
    setName({ ...name, lastName: e.target.value });
    console.log(name.lastName);
  };
  const getEmail = (e) => {
    setContact({ ...contact, email: e.target.value });
    console.log(contact.email);
  };

  const getMobile = (e) => {
    setContact({ ...contact, mobile: e.target.value });
    console.log(contact.mobile);
  };

  return (
    <div className="container">
      <div className="card">
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter your First Name"
              onChange={getFirstName}
            />
            <input
              type="text"
              placeholder="Enter your Last Name"
              onChange={getLastName}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter your Email Id"
              onChange={getEmail}
            />

            <input
              type="text"
              placeholder="Enter your Mobile No."
              onChange={getMobile}
            />
          </div>

          <h1>Your First Name is - {name.firstName}</h1>
          <h1>Your Last Name is - {name.lastName}</h1>
          <h1>Your Email is - {contact.email}</h1>
          <h1>Your Mobile is - {contact.mobile}</h1>
        </form>
      </div>
    </div>
  );
}

export default InputView;

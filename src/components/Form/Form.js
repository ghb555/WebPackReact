import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form className="test-form">
      Name:
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      LastName:
      <input
        type="text"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      Phone:
      <input
        type="text"
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <h4>
        Hello {name} {lastName} {phone}
      </h4>
    </form>
  );
};

export default Form;

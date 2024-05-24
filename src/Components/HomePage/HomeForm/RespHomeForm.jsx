import React, { useState } from "react";
import "./HomeForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RespHomeForm = () => {
  let [data, setData] = useState({
    userName: "",
    email: "",
    phone: "",
    detail: "",
    location: "",
  });

  let { name, email, phone, location } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      phone,
      location,
    };
    console.log(payload);
  };
  return (
    <div className="respHomeFormContainer">
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Talk to our Expert</legend>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="email">Email :</label> */}
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="phone">Phone :</label> */}
              <td>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="detail">Details :</label> */}
              <td>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  placeholder="Location of Your Plot"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <button className="sub" type="handlesubmit">
              Book free Consultancy{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="formIcon"
              ></FontAwesomeIcon>
            </button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default RespHomeForm;

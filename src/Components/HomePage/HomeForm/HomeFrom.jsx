import React, { useState } from "react";
import "./HomeForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HomeFrom = () => {
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
    let { name, phone, email, location } = data;
    const mailtoLink = `mailto:hello@buildurspace.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${location}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="homeFormContainer">
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
              Book Free Consultancy{" "}
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

export default HomeFrom;

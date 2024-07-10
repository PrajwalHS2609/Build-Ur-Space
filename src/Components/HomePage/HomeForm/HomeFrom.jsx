import React, { useState } from "react";
import "./HomeForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeFrom = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  let { name, email, phone, location } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   let { name, phone, email, location } = data;
  //   const mailtoLink = `mailto:hello@buildurspace.com?subject=Message from ${name}&body=${encodeURIComponent(
  //     `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${location}`
  //   )}`;
  //   window.location.href = mailtoLink;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_n5j9zu1",
        "template_yy6q8s9",
        e.target,
        "YMANvl26uUKa6DQU3"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
          window.location.assign("/");
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send mail");
        }
      );
  };

  return (
    <div className="homeFormContainer">
      <ToastContainer />
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
            <button className="sub" type="handleSubmit">
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

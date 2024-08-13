import React, { useState } from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });
  let { name, phone, email, requirement } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h1ai4rh",
        "template_l5b0jxr",
        e.target,
        "kcJN8Dq5IrzOZobBz"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
          setTimeout(() => {
            window.location.assign("/contact-us");
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send mail");
        }
      );
  };

  return (
    <div className="contactFormContainer">
      <ToastContainer />
      <form action="" onSubmit={handleSubmit}>
        <legend>
          <h2>
            Lets <span>Build</span>
          </h2>
        </legend>
        <fieldset>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={name}
                  name="name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Phone No"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                  name="email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name="requirement"
                  value={requirement}
                  id=""
                  cols={30}
                  rows={3}
                  placeholder="Your requirement"
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
            <div className="contactFormButton">
              <button type="handleSubmit">Submit</button>
            </div>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;

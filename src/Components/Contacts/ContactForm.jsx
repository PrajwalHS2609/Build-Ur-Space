import React, { useState } from "react";
import "./Contacts.css";
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
  let handleSubmit = (e) => {
    e.preventDefault();
    let { name, phone, email, requirement } = data;
    const mailtoLink = `mailto:hello@buildurspace.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${requirement}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="contactFormContainer">
      <form action="" onSubmit={handleSubmit}>
        <legend>
          <h1>
            Lets <span>Build</span>
          </h1>
        </legend>
        <fieldset>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="NAME"
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

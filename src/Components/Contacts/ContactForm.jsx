import React from "react";
import "./Contacts.css";
const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <form action="">
        <legend>
          <h1>
            Lets <span>Talk</span>
          </h1>
        </legend>
        <fieldset>
          <table>
            <tr>
              <td>
                <input type="text" placeholder="NAME" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Phone No" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Email" />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={3}
                  placeholder="Your requirement"
                ></textarea>
              </td>
            </tr>
            <div className="contactFormButton">
            <button type="submit">Submit</button>
            </div>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;

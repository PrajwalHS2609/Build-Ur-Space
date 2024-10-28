import React from "react";
import ContactsHead from "./ContactsHead";
import ContactsMain from "./ContactsMain";
import "./Contacts.css";
import WhereToFind from "./WhereToFind/WhereToFind";
import { Helmet } from "react-helmet";
const Contacts = () => {
  return (
    <div className="contactContainer">
      <Helmet>
        <title>
          Contact Us for Home & Commerical Construction in Bangalore,
          Chitradurga & Bellery.
        </title>
        <meta
          name="description"
          content="Contact Us for Home & Commerical Construction in Bangalore, Chitradurga & Bellery. Call: +91 9742255110"
        />
      </Helmet>
      <ContactsHead />
      <ContactsMain />
      <WhereToFind />
    </div>
  );
};

export default Contacts;

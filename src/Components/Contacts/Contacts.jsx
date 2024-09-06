import React from "react";
import ContactsHead from "./ContactsHead";
import ContactsMain from "./ContactsMain";
import "./Contacts.css";
import WhereToFind from "./WhereToFind/WhereToFind";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
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
      <WhatsApp/>
      <WhereToFind />
      <Footer />
    </div>
  );
};

export default Contacts;

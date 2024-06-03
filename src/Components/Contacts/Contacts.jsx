import React from "react";
import ContactsHead from "./ContactsHead";
import ContactsMain from "./ContactsMain";
import "./Contacts.css";
import WhereToFind from "./WhereToFind/WhereToFind";
import Footer from "../Footer/Footer";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import HomeWhy from "./../HomePage/HomeWhy/HomeWhy";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
const Contacts = () => {
  return (
    <div className="contactContainer">
      <ContactsHead />
      <ContactsMain />
      <WhereToFind />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default Contacts;

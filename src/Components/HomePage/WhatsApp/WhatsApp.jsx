import React from "react";
import "./WhatsApp.css";
import favicon from "./../../../Images/favicon.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="919741111036"
        accountName="BuildUrSpace"
        avatar={favicon} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to Build Ur Space! We offer expert construction and interior design services to bring your dream project to life! Call Now ~ 9741111036" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;

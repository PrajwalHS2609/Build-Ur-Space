import React from "react";
import "./Package.css";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import EssentialPackage from "./EssentialPackage";
const LuxuryPackage = () => {
  return (
    <>
     <EssentialPackage/>
    </>
  );
};

export default LuxuryPackage;

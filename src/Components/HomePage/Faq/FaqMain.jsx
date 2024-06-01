import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
const FaqMain = () => {
  return (
    <div className="faqMainContainer">
      <Accordion className="faqContent" allowZeroExpanded>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead" >
            <AccordionItemButton className="faqBut" >
              <h1>What services does Build ur Space offer ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="faqPanel">
            <p>
              Build ur Space provides a wide range of services including
              residential and commercial construction, interior design,
              renovation, and remodeling. Our services cover everything from
              initial design consultation to project management and final
              execution.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>
                How do I get started with a construction or interior design
                project ?
              </h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              To get started, you can contact us through our website, phone, or
              email to schedule a consultation. During the consultation, we’ll
              discuss your ideas, requirements, budget, and timeline to develop
              a tailored plan for your project.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>Do you offer free consultations ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we offer a free initial consultation to understand your needs
              and provide you with a preliminary estimate and project plan.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>Can you help with both small and large projects ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Absolutely. We handle projects of all sizes, from small home
              renovations to large commercial construction and interior design
              projects.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>What areas do you serve ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              We primarily serve the Bangalore area and its surroundings. For
              specific locations, please contact us directly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>How long will my project take to complete ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The timeline for your project will depend on its size and
              complexity. During our initial consultation, we will provide you
              with an estimated timeline based on your specific requirements.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>Can you work within my budget ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we are committed to delivering high-quality work within your
              budget. We will discuss your budget during the consultation and
              tailor our services to meet your financial constraints while
              maintaining the quality of work.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>Do you offer custom design solutions ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we specialize in creating custom design solutions that cater
              to your unique style and functional needs. Our team works closely
              with you to ensure that every detail reflects your vision.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>What materials do you use in your projects ?</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              We use high-quality, durable materials sourced from trusted
              suppliers. Our selection of materials will be based on your
              preferences, budget, and the specific requirements of your
              project.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h1>
                Do you handle all aspects of the project, including permits and
                approvals ?
              </h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we manage all aspects of the project, including obtaining
              necessary permits and approvals, to ensure a smooth and
              hassle-free experience for our clients.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqMain;

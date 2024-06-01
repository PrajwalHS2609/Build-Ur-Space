import React, { useState } from "react";
import "./Package.css";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const EssentialPackage = () => {
  let [toggle, setToggle] = useState(false);
  let handleExpand = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className="essentialPack">
      <Accordion className="packContent" allowZeroExpanded>
        {data.map((x) => {
          return (
            <AccordionItem className="packItem">
              <AccordionItemHeading className="packHead" onClick={handleExpand}>
                <AccordionItemButton className="packBut">
                  <h3>{x.title}</h3>
                  <h3>{toggle ? "-" : "+"}</h3>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="packPanel">
                <p>
                  <ul>
                    {x.content.map((y) => {
                      return <li>{y}</li>;
                    })}
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
const data = [
  {
    title: "Designs & Drawings",
    content: [
      "2D – Floor Plans",
      "3D Elevation Designs",
      "Design Development – A maximum of 3 drawing revisions",
    ],
  },
  {
    title: "Civil Construction",
    content: [
      "Floor to floor height – 9′",
      "Steel (500 TMT Bars) – Bhuwalka/Kamadhenu",
      "Cement (Grade 43 or 53 as needed) – Penna/Dalmia",
      " UG Sump built with solid blocks of 6” thickness & waterproof plastered 6000 lts",
      ">Concrete – M20 grade RMC",
      "Solid Block walls – 6” & 4” thickness",
      " Internal, external and toilet wall – column joints plastering  with chicken mesh",
      "Waterproofing compound – Dr.Fixit/FOSROC for external walls",
      "Cement based waterproofing",
      "Steel/concrete lofts – Not included",
      "Anti termite treatment",
    ],
  },
  {
    title: "Architectural Design",
    content: [
      "Working drawing for all works",
      "Schedule of Openings",
      "Section and Elevation",
    ],
  },
  {
    title: "Interior Layout",
    content: ["2D Furniture layout"],
  },
  {
    title: "Structural Design",
    content: [
      "Structural Design as per IS Code.",
      "Good for construction drawings",
      "Soil Test report",
    ],
  },
  {
    title: "MEP Designing",
    content: [
      "Electrical Layout",
      "Plumbing Water Line Layout",
      "Plumbing Drainage Line Layout",
    ],
  },
  {
    title: "Government Liaison Assistance",
    title2:
      " buildAhome will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
    content: [
      "Construction Plan Sanction",
      "Temporary Electricity connection",
      "Permanent electrical connection",
      "Water connection",
      "Sewage connection",
    ],
  },
  {
    title: "Flooring & Wall tiling",
    content: [
      "  Living, Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.50/-per Sqft",
      " Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.35/-per Sqft",
      "Toilet Flooring : Anti-skid tiles – Rs.40/- per Sqft",
      "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.50/- per Sqft",
      "Kitchen counter top : Granite – Rs.110/- per Sqft",
      " Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.45/- per Sqft",
      "2’ X 2’ is maximum tile size",
      "No set back tiles",
    ],
  },
  {
    title: "Painting",
    content: [
      "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat latest Tractor emulsion paint",
      " External walls : 1 coat primer + 2 coat ace weather proof paint",
      "Brand : Asian/Berger/Dulux",
      "External walls : 1 coat primer + 2 coat ace weather proof paint",
      "Brand : Asian/Berger/Dulux",
    ],
  },
  {
    title: "Electrical",
    content: [
      "Light & power points – as per electrical design",
      "Geyser points – All bathrooms",
      "AC provision – Any 1 room for the house",
      "Conduits – Good quality, hidden in slabs and walls",
      "Copper wire –Anchor",
      "External electrification is included",
      "Switches & Plates – Anchor – Ziva make",
      "A main DB & MCB – IndoAsian make",
      "One UPS point for the house",
    ],
  },
  {
    title: "Plumbing",
    content: [
      "Water supply system – Internal & External",
      "Connection for water inlet from corporation",
      " External sewage system – Inspection chambers & sewage outlet to site boundary",
      "Class B CPVC pipes – Astral/Supreme make",
      "Solar & Geyser Provision",
      "Rain water harvesting facility – Ground water recharge",
      "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 6.5 per litre",
    ],
  },
  {
    title: "Fixtures",
    content: [
      "Kitchen sink with accessories : SS – Rs.4500/- per kitchen",
      " CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera – Rs.20,000/- per bathroom attached toilet",
      "Electrical fixtures – Not Included",
    ],
  },
  {
    title: "Doors",
    content: [
      " Doors – Main Door : Teak Wood frame & shutter including hardware – Rs.20,000/- per door",
      "Internal Doors : Any wood frame & shutter including cost of hardware – Rs.8,000/- per door",
      "Door hardware – Ozone/Europa/Dorma make",
      "Door hinges – SS hinges",
      "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
    ],
  },
  {
    title: "Windows",
    content: [
      "Aluminium windows – 5mm clear glass with MS Grills",
      " Basic price : Alujminium/uPVC window including MS grills – Rs 400/- per Sqft",
    ],
  },
  {
    title: "Fabrication",
    content: [
      "Main Gate: MS Gate – Rs.330/- per Sqft",
      " External staircase & balcony railing : MS Railing – Rs. 550/- per Rft",
      "Utility grill is not included in the package",
    ],
  },
  {
    title: "Compound Wall",
    content: [
      " Readymade/ Pre-cast Compound wall – Maximum thickness of 3″ (If charged)",
      "The compound wall is painted",
      "Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM",
      "Height of compound – 5 Feet",
    ],
  },
  {
    title: "Elevation",
    content: [
      "This proposal includes basic elevation design for your home",
      "A 3D elevation is presented for client to choose from & design",
      "Elevation can be designed & more elements may be added at very nominal cost to the design",
    ],
  },
  {
    title: "Exclusion & Incidentals",
    content: [
      "Government fees for the liaison bodies to be paid directly by the client",
      "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
      " Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly",
      "Hard rock/soft rock excavation, if it arises shall be charged for accordingly",
      " Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
      " Basic price of Cement is Rs.350/- per bag & Steel is Rs.50,000/- per MT. Any increase in these prices shall be charged accordingly",
      "Percentage of opening for door & windows – 12% Maximum",
      "Any work not mentioned within this package or outside the site  boundary shall be charged for accordingly",
      "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
      " SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions",
      "  If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
      " A specific area to construct labour and material shed needs to  be provided within 50 feet from the construction place by the client",
    ],
  },
  {
    title: "Payment Structure",
    content: [
      " A customized payment schedule will be shared based on project specifications",
    ],
  },
  {
    title: "Warranty and Guarantee",
    content: [
      " Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years",
      "Guarantee & warranty is provided on Stamp paper",
    ],
  },
];
export default EssentialPackage;

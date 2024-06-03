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
const ClassicPackage = () => {
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
    title: "DESIGN & DRAWING",
    content: [
      "2D – Floor Plans",
      "3D Elevation Designs",
      "Design Development – A maximum of 3 drawing revisions",
      "Internal Isometric views all rooms, open areas etc.",
      " 3D Walkthrough of the home along with internal & external walkthrough.",
      "Landscaping design.",
    ],
  },
  {
    title: "ARCHITECTURAL DESIGN",
    content: [
      "Working drawing for all works",
      "Schedule of Openings",
      "Section and Elevation",
    ],
  },
  {
    title: "STRUCTURAL DESIGNING",
    content: [
      "Structural Design as per IS Code.",
      "Good for construction drawings",
      "Soil Test report",
    ],
  },
  {
    title: "MEP DESIGNING",
    content: [
      "Electrical Layout",
      "Plumbing Water Line Layout",
      "Plumbing Drainage Line Layout",
    ],
  },
  {
    title: "INTERIOR DESIGNING",
    content: [
      "2D Furniture layout",
      " Complete 3D design interiors, only if executed by BUILD UR SPACE.",
      " 3D Walkthrough",
    ],
  },
  {
    title: "GOVERNMENT LIAISON ASSISTANCE",
    content: [
      " BUILD UR SPACE will provide liaison assistance with different government agencies, obtain permissions, licenses & sanction fee for the following (if applicable)",
      "Construction Plan Sanction | Temporary Electricity connection",
      "Permanent electrical connection",
      "Water connection | Sewage connection",
    ],
  },
  {
    title: "CIVIL CONSTRUCTION",
    content: [
      "Floor to floor height – 10'6",
      "Steel (500 TMT Bars) – Kamadhenu, prime gold, Jindal Equivalents",
      "Cement (Grade 43 or 53 as needed) – UltraTech/Dalmia",
      " UG Sump built with solid blocks of 8” thickness & waterproof plastered 8000 lts",
      "Concrete – M25 grade RMC",
      "Standard solid Block walls – 6” & 4” thickness",
      " Internal, external and toilet wall – column joints plastering  with chicken mesh",
      "Waterproofing compound – Dr.Fixit/FOSROC for external walls",
      "Cement based waterproofing",
      "Steel/concrete lofts –  included",
      "Anti termite treatment",
    ],
  },

  {
    title: "FLOORING & WALL TILING",
    content: [
      "Living, Foyer: Marble finished Vitrified tiles – Rs.80/-per Sqft",
      "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.70/-per Sqft",
      "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.50/-per Sqft",
      "Toilet Flooring : Anti-skid tiles – Rs.50/- per Sqft",
      "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.55/- per Sqft",
      "Kitchen counter top : Granite – Rs.130/- per Sqft",
      "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.65/- per Sqft",
      " Staircase: Granite – Rs.95/- per Sqft",
      " Parking Area: Parking tiles – Rs.45/- per Sqft",
      "Puja Room -  Wall tiling – Rs.45/- per Sqft",
      "Puja Room -  Granite slab- Rs-115/- per Sqft",
      "No setback tiles",
      // "2 X 2  tile size maximum ",
    ],
  },
  {
    title: "PAINTING",
    content: [
      "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat latest Tractor emulsion paint  or equivalent",
      "External walls : 1 coat primer + 2 coat ace weather proof paint",
      "Brand : Asian/Berger/Dulux",
    ],
  },
  {
    title: "ELECTRICAL",
    content: [
      "Light & power points – as per electrical design",
      "Geyser points – All bathrooms",
      "AC provision – Any 2 room for the house",
      "Conduits – Good quality, hidden in slabs and walls",
      "Copper wire –Anchor",
      "External electrification is included",
      "Switches & Plates – Anchor – Roma make",
      "A main DB & MCB – IndoAsian make",
      "One Electric car charging point - Parking area",
    ],
  },
  {
    title: "PLUMBING",
    content: [
      "Water supply system – Internal & External",
      "Connection for water inlet from corporation",
      " External sewage system – Inspection chambers & sewage outlet to site boundary",
      "Class B CPVC pipes – Astral/Supreme make",
      "Solar & Geyser Provision",
      "Rain water harvesting facility – Ground water recharge",
      "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7 per litre",
    ],
  },
  {
    title: "FIXTURES",
    content: [
      "Kitchen sink with accessories : SS – Rs.5500/- per kitchen  (inc sink, Tap, etc)",
      " CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Hindware/Cera – Rs.25,000/- per bathroom attached toilet",
      "10,000/- for powder room",
      "Electrical fixtures – Not Included",
    ],
  },
  {
    title: "DOORS",
    content: [
      " Doors – Main Door : Teak Wood frame(5” X 3”)  & shutter including hardware – Rs.25,000/- per door",
      "Internal Doors : Any wood frame(4” X 2.5”)  & shutter including cost of hardware – Rs.11,000/- per door",
      " Internal Door frames & shutters – Painted (only)",
      " Main Door – Polished",
      " Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.9,000/- per door",
      "Door hardware – Ozone/Europa/Dorma make",
      "Door hinges – SS hinges",
      "Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.",
    ],
  },
  {
    title: "WINDOWS",
    content: [
      " UPVC windows – 5mm clear glass with MS Grills",
      " Basic price : UPVC window including MS grills – Rs 550/- per Sqft",
    ],
  },
  {
    title: "COMPOUND WALL",
    content: [" Compound wall is not included in the package"],
  },
  {
    title: "FABRICATION",
    content: [
      "Main Gate: MS Gate – Rs.400/- per Sqft",
      "External staircase & balcony railing : MS Railing – Rs. 600/ per Rft",
      " Internal staircase  railing : SS Railing – Rs. 900/- per Rft",
      "Utility grill is not included in the package",
    ],
  },

  {
    title: "ELEVATION",
    content: [
      "This proposal includes a basic elevation design for your home",
      " Only Plastering based elevation is included",
      "Special elevation materials are not included in the package",
    ],
  },
  {
    title: "EXCLUSIONS &  BASIC RATES",
    content: [
      "Government fees for the liaison bodies to be paid directly by the client",
      "The complete fee payment for plan sanction in Panchayat limits need to be borne by client",
      " Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for extra",
      "Hard rock/soft rock excavation, if it arises shall be charged  accordingly",
      " Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual",
      " Basic price of Cement is Rs.350/- per bag & Steel is Rs.52,000/- per MT. Any increase in these prices shall be charged accordingly",
      "Percentage of opening for door & windows – 12% Maximum",
      "Any work not mentioned within this package or outside the site  boundary shall be charged  accordingly",
      "One point of Electricity & water needs to be provided by the client free of cost to facilitate construction",
      " SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly as per actuals upon site conditions",
      "  If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals",
      " A specific area to construct labour and material shed needs to  be provided within 50 feet from the construction place by the client",
      " Any road-cutting charges for the connection of Electricity and Sewage lines are not included, such works shall be charged additionally.",
      " Interiors and furniture etc. not included in this plan.",
      " Electrical Fittings, Electrical Fixtures, Chandeliers, etc. not included in this plan.",
      " Burglar Alarm etc. not included in this plan.",
      "Motors for Pumping Water from the Sump to the overheadtank are not included in this plan.",
      "POP [Plaster of Paris] false ceiling is not included in this plan.",
      " Elevation is not included in this plan.",
      " Elevator / lift not included in this plan.",
      " Home Automation etc not included in this plan.",
      " Landscaping is not included in this plan.",
      "KEB meter connection should be borne by client.",
      " BWSSB sewer connection should be borne by client.",
      " Solar water heater/ panel not included in this plan.",
      " A pressure pump is not included in this plan.",
      " Road cutting [electrical and plumbing including office works] should be borne by client.",
      " Panel board, Earthing pit, and wiring/cabling [panel board to main KEB pole] should be borne by the client.",
      "Plan approval should be borne by the client.",
      "Terrace tiles are not included in this plan.",
      " NOTE: The above-mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan.",
    ],
  },
];

export default ClassicPackage;

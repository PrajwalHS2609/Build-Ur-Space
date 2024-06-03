import React, { useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const ExclusivePackage = () => {
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
      "Premium 2D & 3D – Floor Plans",
      "Luxury 3D Elevation Designs of all views.",
      "Design Development – No maximum of  drawing revisions",
      "Internal Isometric views all rooms, open areas  & detailed renders for each segment of the home.",
      " 3D Walkthrough of the home along with internal & external walkthrough.",
      "Detailed Landscaping design.",
      " Isometric 3D model of home with each floor",
      "Site survey by surveyor with instruments & drawing on the basis of survey",
      "VR for the 3D walkthrough of the home",
    ],
  },
  {
    title: "ARCHITECTURAL DESIGN",
    content: [
      "Working drawing for all works",
      "Schedule of Openings",
      "Section and Elevation",
      " A detailed portfolio of the home post-handover.",
    ],
  },
  {
    title: "STRUCTURAL DESIGNING",
    content: [
      "Structural Design as per IS Code.",
      "Good for construction drawings",
      "Soil Test report",
      "Overlapped Structural, Architectural & MEP Drawings",
      " 3D structural drawings & analysis report",
    ],
  },
  {
    title: "MEP DESIGNING",
    content: [
      "Electrical Layout",
      "Plumbing Water Line Layout",
      "Plumbing Drainage Line Layout",
      " HVAC Design",
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
      "Floor to floor height – 12'0",
      "Steel (550 TMT Bars) –   JSW, SAIL, TATA Equivalents ",
      "Cement (Grade 43 or 53 as needed) – UltraTech/ Birla super / ACC equivalent",
      " UG Sump built with RCC & waterproof plastered 18,000 lts",
      "Concrete – M25 grade RMC",
      "Machine-cut solid Block walls – 6” & 4” thickness of APCO equivalent  or country brick wall construction",
      " Internal courtyards, skylights other designer architectural elements are included.",
      " Internal, external and toilet wall – column joints plastering  with chicken mesh",
      "Waterproofing compound – Dr.Fixit/FOSROC for external walls, waterproofing, Cinder filling in sunken toilets, Heat &  Waterproofing in Terrace ",
      " A ledge wall for incorporating concealed sanitary parts is included",
      "Steel/concrete lofts –  included",
      "Anti termite treatment",
    ],
  },

  {
    title: "FLOORING & WALL TILING",
    content: [
      "Living, Foyer: Italian Marble / premium Vitrified tiles(4x8) – Rs.450/-per Sqft",
      "Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.110/-per Sqft",
      "Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.85/-per Sqft",
      "Toilet Flooring : Anti-skid tiles – Rs.85/- per Sqft",
      "Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.85/- per Sqft",
      "Kitchen counter top : Quartz counter top – Rs.500/- per Sqft",
      "Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.110/- per Sqft",
      " Staircase: Granite – Rs.150/- per Sqft",
      " Parking Area: Parking tiles – Rs.70/- per Sqft",
      "Puja Room -  Wall tiling – Rs.85/- per Sqft(full height",
      "Puja Room -  Quartz slab- Rs-450/- per Sqft",
      "Set back area tiles of 40 per sqft will be provided",
      " No tile size limit",
      "Epoxy grouting in bathrooms",
    ],
  },
  {
    title: "PAINTING",
    content: [
      "Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 coat royale luxury emulsion paint   or equivalent",
      "External walls : 1 coat primer + 2 coat  ultima weather proof paint",
      "Brand : Asian/Berger/Dulux",
    ],
  },
  {
    title: "ELECTRICAL",
    content: [
      "Light & power points –  unlimited in a good design sense",
      "Geyser points – All bathrooms",
      "AC provision – All room for the house",
      "Conduits – Good quality, hidden in slabs and walls",
      "Copper wire - Havells – Fire retardant & smokeproof copper wire",
      "External electrification is included",
      "Switches & Plates –  LeGrand lyncus/myrius or equivalent (touch screen switch provision only)",
      "A main DB & MCB –  ABB/Schneider/ Legrand make or equivalent",
      "One UPS point for the house",
      "Two Electric car charging point - Parking area",
      "Full-house CCTV provision only",
      "Provision for home automation is included",
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
      "PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7.5 per litre",
      " FRP chamber covers for chambers",
      " Separate hot & cold water line for sink",
    ],
  },
  {
    title: "FIXTURES",
    content: [
      "Kitchen sink with accessories : SS – Rs.24,000/- per kitchen  (inc sink, Tap, etc)",
      " CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : KOHLER/Jaquar – Rs.45,000/- per bathroom attached toilet",
      "20,000/- for powder room",
      "Electrical fixtures – Not Included",
    ],
  },
  {
    title: "DOORS",
    content: [
      " Doors – Main Door,puja door : Teak Wood frame  & shutter including hardware – Rs.70,000/- per door",
      "Internal Doors : sal wood frame  & shutter including cost of hardware – Rs.22,000/- per door",
      " Internal Door frames & shutters – Painted/polished",
      " Main, puja Door – Polished with melamine spray finish",
      " Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.14,000/- per door",
      "Door hardware – Ozone/Europa/Dorma make",
      "Door hinges – SS hinges",
      "Door & Door Frame cost – Inclusive  planing, rebate, transportation etc.",
    ],
  },
  {
    title: "WINDOWS",
    content: [
      " UPVC windows – 5mm clear toughened glass with MS Grills",
      " Basic price: UPVC window including MS grills – Rs 900/- per Sqft or sal wood frame (5” X 3”) & Honne shutter of 1.2” thickness with clear glass & grill rod",
    ],
  },
  {
    title: "COMPOUND WALL",
    content: [
      "  Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)",
      " Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM, Height of Compound wall – 5’6” Feet",
      " Compound wall – Plastered & Painted",
    ],
  },
  {
    title: "FABRICATION",
    content: [
      "Main Gate: MS Gate – Rs.550/- per Sqft",
      "External staircase & balcony railing : MS Railing – Rs. 800/ per Rft",
      " Internal staircase  railing : SS Railing – Rs. 1200/- per Rft",
      "Utility grill is  included in the package",
      " Waterproofing is included for utility & balcony portions",
    ],
  },

  {
    title: "ELEVATION",
    content: [
      " This proposal includes a luxurious elevation",
      " A 3D elevation is presented for client to choose from & design further",
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

export default ExclusivePackage;

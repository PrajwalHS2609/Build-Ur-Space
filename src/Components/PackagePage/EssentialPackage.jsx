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
const EssentialPackage = () => {
  return (
    <div className="essentialPack">
      <Accordion className="packContent" allowZeroExpanded >
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Designs & Drawings</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>2D – Floor Plans</li>
                <li>3D Elevation Designs</li>
                <li>Design Development – A maximum of 3 drawing revisions</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Civil Construction</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Floor to floor height – 9′</li>
                <li>Steel (500 TMT Bars) – Bhuwalka/Kamadhenu</li>
                <li>Cement (Grade 43 or 53 as needed) – Penna/Dalmia</li>
                <li>
                  UG Sump built with solid blocks of 6” thickness & waterproof
                  plastered 6000 lts
                </li>
                <li>Concrete – M20 grade RMC</li>
                <li>Solid Block walls – 6” & 4” thickness</li>
                <li>
                  Internal, external and toilet wall – column joints plastering
                  with chicken mesh
                </li>
                <li>
                  Waterproofing compound – Dr.Fixit/FOSROC for external walls
                </li>
                <li>Cement based waterproofing</li>
                <li>Steel/concrete lofts – Not included</li>
                <li>Anti termite treatment</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Architectural Design</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Working drawing for all works</li>
                <li>Schedule of Openings</li>
                <li>Section and Elevation</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Interior Layout</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>2D Furniture layout</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Structural Design</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Structural Design as per IS Code.</li>
                <li>Good for construction drawings</li>
                <li>Soil Test report</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>MEP Designing</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Electrical Layout</li>
                <li>Plumbing Water Line Layout</li>
                <li>Plumbing Drainage Line Layout</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Government Liaison Assistance</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <h4>
                  buildAhome will provide liaison assistance with different
                  government agencies, obtain permissions, licenses & sanction
                  fee for the following (if applicable)
                </h4>
                <li>Construction Plan Sanction</li>
                <li>Temporary Electricity connection</li>
                <li>Permanent electrical connection</li>
                <li>Water connection</li>
                <li>Sewage connection</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Flooring & Wall tiling</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Living, Kitchen, Dining & Bedrooms : Vitrified tiles – Rs.50/-
                  per Sqft
                </li>
                <li>
                  Balcony, Sit-out, Passage Areas : Anti-skid tiles – Rs.35/-
                  per Sqft
                </li>
                <li>Toilet Flooring : Anti-skid tiles – Rs.40/- per Sqft</li>
                <li>
                  Toilet Wall Dado (7ft height) : Highlighting Tiles – Rs.50/-
                  per Sqft
                </li>
                <li>Kitchen counter top : Granite – Rs.110/- per Sqft</li>
                <li>
                  Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles
                  – Rs.45/- per Sqft
                </li>
                <li>2’ X 2’ is maximum tile size</li>
                <li>No set back tiles</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Painting</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Internal wall & ceiling : 2 coat wall putty + 1 coat primer
                  coat + 2 coat latest Tractor emulsion paint
                </li>
                <li>
                  External walls : 1 coat primer + 2 coat ace weather proof
                  paint
                </li>
                <li>Brand : Asian/Berger/Dulux</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Electrical</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Light & power points – as per electrical design</li>
                <li>Geyser points – All bathrooms</li>
                <li>AC provision – Any 1 room for the house</li>
                <li>Conduits – Good quality, hidden in slabs and walls</li>
                <li>Copper wire –Anchor</li>
                <li>External electrification is included</li>
                <li>Switches & Plates – Anchor – Ziva make</li>
                <li>A main DB & MCB – IndoAsian make</li>
                <li>One UPS point for the house</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Plumbing</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Water supply system – Internal & Externa</li>
                <li>Connection for water inlet from corporation</li>
                <li>
                  External sewage system – Inspection chambers & sewage outlet
                  to site boundary
                </li>
                <li>Class B CPVC pipes – Astral/Supreme make</li>
                <li>Solar & Geyser Provision</li>
                <li>Rain water harvesting facility – Ground water recharge</li>
                <li>
                  PVC Overhead Tank – Ganga or Equivalent make of basic price Rs
                  6.5 per litre
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Fixtures</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Kitchen sink with accessories : SS – Rs.4500/- per kitchen
                </li>
                <li>
                  CP & Sanitary fixtures such as Wash Basin, WC, Taps and other
                  accessories like bottle trap, gratings etc. : Hindware/Cera –
                  Rs.20,000/- per bathroom attached toilet
                </li>
                <li>Electrical fixtures – Not Included</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Doors</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Doors – Main Door : Teak Wood frame & shutter including
                  hardware – Rs.20,000/- per door
                </li>
                <li>
                  Internal Doors : Any wood frame & shutter including cost of
                  hardware – Rs.8,000/- per door
                </li>
                <li>Main Door – Polished by hand</li>
                <li>Bathroom, Terrace & Utility Door – Frame & shutter including hardware – Rs.7,500/- per door</li>
                <li>Door hardware – Ozone/Europa/Dorma make</li>
                <li>Door hinges – SS hinges</li>
                <li>Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Windows</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Aluminium windows – 5mm clear glass with MS Grills</li>
                <li>
                  Basic price : Alujminium/uPVC window including MS grills – Rs
                  400/- per Sqft
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Fabrication</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>Main Gate: MS Gate – Rs.330/- per Sqft</li>
                <li>
                  External staircase & balcony railing : MS Railing – Rs. 550/-
                  per Rft
                </li>
                <li>
                  Internal staircase railing : SS Railing – Rs.840/- per Rft
                </li>
                <li>Utility grill is not included in the package</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Compound Wall</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Readymade/ Pre-cast Compound wall – Maximum thickness of 3″
                  (If charged)
                </li>
                <li>The compound wall is painted</li>
                <li>
                  Excavation, Foundation, PCC, Size Stone Masonry with DPC
                  course above SSM
                </li>
                <li>Height of compound – 5 Feet</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Elevation</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  This proposal includes basic elevation design for your home
                </li>
                <li>
                  A 3D elevation is presented for client to choose from & design
                </li>
                <li>
                  Elevation can be designed & more elements may be added at very
                  nominal cost to the design
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Exclusion & Incidentals</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Government fees for the liaison bodies to be paid directly by
                  the client
                </li>
                <li>
                  The complete fee payment for plan sanction in Panchayat limits
                  need to be borne by client
                </li>
                <li>
                  Assuming the site & road level to be equal, if the ground
                  level needs to be raised above 18”, it shall be charged for
                  accordingly
                </li>
                <li>
                  Hard rock/soft rock excavation, if it arises shall be charged
                  for accordingly
                </li>
                <li>
                  Buying new earth/sending existing earth for
                  excavation/backfilling purpose shall be charged on actual
                </li>
                <li>
                  Basic price of Cement is Rs.350/- per bag & Steel is
                  Rs.50,000/- per MT. Any increase in these prices shall be
                  charged accordingly
                </li>
                <li>Percentage of opening for door & windows – 12% Maximum</li>
                <li>
                  Any work not mentioned within this package or outside the site
                  boundary shall be charged for accordingly
                </li>
                <li>
                  One point of Electricity & water needs to be provided by the
                  client free of cost to facilitate construction
                </li>
                <li>
                  SBC of soil is considered at 180 KN/M2 and depth of the
                  foundation considered at 5 Feet, any increase in depth shall
                  be charged accordingly on actuals upon site conditions
                </li>
                <li>
                  If there is constraints in material delivery or socking place
                  and materials to be order in small quantities, the additional
                  charges for the same shall be charged on actuals
                </li>
                <li>
                  A specific area to construct labour and material shed needs to
                  be provided within 50 feet from the construction place by the
                  client
                </li>
                <li>
                  Any road cutting charges for the connection of Electricity and
                  Sewage lines is not included, such works shall be charged
                  additionally
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Payment Structure</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  A customized payment schedule will be shared based on project
                  specifications
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="packItem">
          <AccordionItemHeading className="packHead">
            <AccordionItemButton className="packBut">
              <h3>Warranty and Guarantee</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="packPanel">
            <p>
              <ul>
                <li>
                  Construction guarantee – 1 Year ; Waterproofing warranty – 10
                  Years
                </li>
                <li>Guarantee & warranty is provided on Stamp paper</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default EssentialPackage;

import React from "react";
import AccordionItem from './AccordionItem';


function CreateTicket() {
    return (
    <div className="accordion" id="supportAccordion">

      <AccordionItem id="One" title="Account Opening" icon="bi bi-plus-circle">
        {/* This content is passed as "children" */}
        <ul className="list-unstyled ps-4">
            <li className="py-2"><a href="#" className="text-decoration-none text-secondary">Resident individual</a></li>
            <li className="py-2"><a href="#" className="text-decoration-none text-secondary">Minor</a></li>
        </ul>
      </AccordionItem>

      <AccordionItem id="Two" title="Your Zerodha Account" icon="bi bi-person-circle">
        <ul className="list-unstyled ps-4">
            <li className="py-2"><a href="#" className="text-decoration-none text-secondary">Your Profile</a></li>
            <li className="py-2"><a href="#" className="text-decoration-none text-secondary">Account modification</a></li>
        </ul>
      </AccordionItem>

      <AccordionItem id="Three" title="Kite" icon="bi bi-app-indicator">
        <p>Content for Kite goes here.</p>
      </AccordionItem>

      <AccordionItem id="Four" title="Funds" icon="bi bi-wallet-fill">
        <p>Content for Funds goes here.</p>
      </AccordionItem>

      <AccordionItem id="Five" title="Console" icon="bi bi-display">
        <p>Content for Console goes here.</p>
      </AccordionItem>
      
      <AccordionItem id="Six" title="Coin" icon="bi bi-currency-bitcoin">
        <p>Content for Coin goes here.</p>
      </AccordionItem>

    </div>
  );
};

export default CreateTicket;
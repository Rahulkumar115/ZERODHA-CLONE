import React from "react";
import AccordionItem from './AccordionItem';


function CreateTicket() {
    return (
        <div className="accordion" id="supportAccordion">

            <AccordionItem id="One" title="Account Opening" icon="fa-solid fa-plus">
                {/* This content is passed as "children" */}
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Resident individual</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Minor</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Non Resident Indian (NRI)</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Company, Partnership, HUF and LLP</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Glossary</a></li>
                </ul>
            </AccordionItem>

            <AccordionItem id="Two" title="Your Zerodha Account" icon="fa-solid fa-circle-user">
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Your Profile</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Account modification</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Nomination</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Transfer and conversion of securities</a></li>
                </ul>
            </AccordionItem>

            <AccordionItem id="Three" title="Kite" icon="fa-brands fa-kickstarter">
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">IPO</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Trading FAQs</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Margin Trading Facility (MTF) and Margins</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Charts and orders</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Alerts and Nudges</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-text-primary support-link">General</a></li>
                </ul>
            </AccordionItem>

            <AccordionItem id="Four" title="Funds" icon="fa-solid fa-indian-rupee-sign">
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Add money</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Withdraw money</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Add bank accounts</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">eMandates</a></li>
                </ul>
            </AccordionItem>

            <AccordionItem id="Five" title="Console" icon="fa-solid fa-circle-notch">
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Portfolio</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Corporate actions</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Funds statement</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Reports</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Profile</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-text-primary support-link">Segments</a></li>
                </ul>
            </AccordionItem>

            <AccordionItem id="Six" title="Coin" icon="fa-solid fa-coins">
                <ul className="ps-4 text-primary">
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Mutual funds</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">National Pension Scheme (NPS)</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Fixed Deposit (FD)</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Features on Coin</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-primary support-link">Payments and Orders</a></li>
                    <li className="py-2 support-link"><a href="#" className="text-decoration-none text-text-primary support-link">General</a></li>
                </ul>
            </AccordionItem>

        </div>
    );
};

export default CreateTicket;
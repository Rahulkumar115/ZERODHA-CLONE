import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import Navbar from "../Navbar";
import Footer from "../Footer";
import AccordionItem from "./AccordionItem";
import SidePanel from "./SidePanel";

function SupportPage() {
    return (
        <>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-5">
                        <CreateTicket />
                    </div>
                    <div className="col-lg-4 mt-5">
                        <SidePanel />
                    </div>

                </div>
            </div>
        </>
    );
}

export default SupportPage;
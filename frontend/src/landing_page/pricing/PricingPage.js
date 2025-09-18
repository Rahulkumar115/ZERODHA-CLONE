import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function PricingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Brokerage />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default PricingPage;
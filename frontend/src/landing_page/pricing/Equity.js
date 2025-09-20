import React from "react";
import Currency from "./Currency";
import Commodity from "./Commodity";

function Equity() {
    return (
        <div className="container mt-5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="equity-tab" data-bs-toggle="tab" data-bs-target="#equity-tab-pane" type="button" role="tab" aria-controls="equity-tab-pane" aria-selected="true">Equity</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="currency-tab" data-bs-toggle="tab" data-bs-target="#currency-tab-pane" type="button" role="tab" aria-controls="currency-tab-pane" aria-selected="false">Currency</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="commodity-tab" data-bs-toggle="tab" data-bs-target="#commodity-tab-pane" type="button" role="tab" aria-controls="commodity-tab-pane" aria-selected="false">Commodity</button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">

                <div className="tab-pane fade show active p-3" id="equity-tab-pane" role="tabpanel" aria-labelledby="equity-tab" tabIndex="0">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-muted" scope="col"></th>
                                <th className="text-muted" scope="col">Equity delivery</th>
                                <th className="text-muted" scope="col">Equity intraday</th>
                                <th className="text-muted" scope="col">F&O - Futures</th>
                                <th className="text-muted" scope="col">F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted">
                            <tr>
                                <th className="text-muted fs-6" scope="row">Brokerage</th>
                                <td className="text-muted fs-6">Zero Brokerage</td>
                                <td className="text-muted fs-6">0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className="text-muted fs-6">0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className="text-muted fs-6">Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th className="text-muted" scope="row">STT/CTT</th>
                                <td className="text-muted">0.1% on buy & sell</td>
                                <td className="text-muted">0.025% on the sell side</td>
                                <td className="text-muted">0.02% on the sell side</td>
                                <td className="text-muted">0.125% of the intrinsic value on options that are bought and exercised<br />• 0.1% on sell side (on premium)</td>
                            </tr>
                            <tr>
                                <th className="text-muted" scope="row">Transaction charges</th>
                                <td className="text-muted">NSE: 0.00297%<br />BSE: 0.00375%</td>
                                <td className="text-muted">NSE: 0.00297%<br />BSE: 0.00375%</td>
                                <td className="text-muted">NSE: 0.00173%<br />BSE: 0</td>
                                <td className="text-muted">NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <th className="text-muted" scope="row">GST</th>
                                <td className="text-muted" colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <th className="text-muted" scope="row">SEBI charges</th>
                                <td className="text-muted" colSpan="4">₹10 / crore</td>
                            </tr>
                            <tr>
                                <th className="text-muted" scope="row">Stamp charges</th>
                                <td className="text-muted">0.015% or ₹1500 / crore on buy side</td>
                                <td className="text-muted">0.003% or ₹300 / crore on buy side</td>
                                <td className="text-muted">0.002% or ₹200 / crore on buy side</td>
                                <td className="text-muted">0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center mt-4 fs-6 text-muted">
                        <h4><a href="#" style={{ textDecoration: "none" }}>Calculate your costs upfront</a> using our brokerage calculator</h4>
                    </div>
                </div>

                <div className="tab-pane fade p-3" id="currency-tab-pane" role="tabpanel" aria-labelledby="currency-tab" tabIndex="0">
                    <Currency />
                </div>

                <div className="tab-pane fade p-3 mb-5" id="commodity-tab-pane" role="tabpanel" aria-labelledby="commodity-tab" tabIndex="0">
                    <Commodity />
                </div>

            </div>

            <div className="mt-5 text-muted">
                <h3 className="mb-4 text-muted fs-5">Charges for account opening</h3>

                <table class="table table-borderless">
                    <thead>
                        <tr className="border-top ">
                            <th className="text-muted">Type of account</th>
                            <th className="text-muted text-end">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-muted">Online account</td>
                            <td className="text-muted text-end"><span className="badge bg-success">FREE*</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted">Offline account</td>
                            <td className="text-muted text-end"><span className="badge bg-success text-end">FREE*</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted">NRI account (offline only)</td>
                            <td className="text-muted text-end">₹ 500</td>
                        </tr>
                        <tr className="border-bottom mb-5">
                            <td className="text-muted">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className="text-muted text-end">₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-5 text-muted">
                <h3 class="mb-4 text-muted fs-5">Demat AMC (Annual Maintenance Charge)</h3>
                <table class="table table-borderless border-top">
                    <thead>
                        <tr>
                            <th className="text-muted">Value of holdings</th>
                            <th className="text-muted">AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-muted" class="align-middle">Up to ₹4 lakh</td>
                            <td className="text-muted"><span class="badge bg-success">FREE*</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted" class="align-middle">₹4 lakh - ₹10 lakh</td>
                            <td className="text-muted">
                                ₹100
                                <small class="d-block text-muted">per year, charged quarterly</small>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-muted" class="align-middle">Above ₹10 lakh</td>
                            <td className="text-muted">
                                ₹300
                                <small class="d-block text-muted">per year, charged quarterly</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="small text-muted mb-5">
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#" style={{ textDecoration: "none" }}>click here</a>.
                </p>
            </div>

            <div className="mt-5">
                <h2 class="mb-5 text-muted mt-5 fs-5">Charges explained</h2>
                <div class="row text-small">
                    <div class="col-md-6">
                        <div class="mb-4">
                            <h5 className="text-muted fs-6">Securities/Commodities transaction tax</h5>
                            <p class="text-muted">
                                Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                                When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h5 className="text-muted fs-6">Transaction/Turnover Charges</h5>
                            <p class="text-muted">
                                Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                                BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                                BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                                BSE has revised transaction charges for group A, B and other non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹275 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                                BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">Call & trade</h6>
                            <p class="text-muted">
                                Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square-off orders.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">Stamp charges</h6>
                            <p class="text-muted">
                                Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">NRI brokerage charges</h6>
                            <p class="text-muted">
                                Charges for NRI brokerage services.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">GST</h6>
                            <p class="text-muted">
                                Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">SEBI Charges</h6>
                            <p class="text-muted">
                                Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">DP (Depository participant) charges</h6>
                            <p class="text-muted">
                                ₹15.93 per scrip (₹13.5 CDSL fee + ₹0.0 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                                Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                                Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">Pledging charges</h6>
                            <p class="text-muted">
                                ₹30 + GST per pledge request per ISIN.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">AMC (Account maintenance charges)</h6>
                            <p class="text-muted">
                                For BSDA demat account, Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="#" style={{ textDecoration: "none" }}>Click here</a>.
                                For non-BSDA demat accounts, ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="#" style={{ textDecoration: "none" }}>Click here</a>.
                            </p>
                        </div>
                        <div class="mb-4">
                            <h6 className="text-muted fs-6">Corporate action order charges</h6>
                            <p class="text-muted">
                                ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equity;
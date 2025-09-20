import React from 'react';

function Commodity() {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-muted fs-6">Commodity futures</th>
                        <th scope="col" className="text-muted fs-6">Commodity options</th>
                    </tr>
                </thead>
                <tbody className="text-muted">
                    <tr>
                        <th scope="row" className="text-muted fs-6">Brokerage</th>
                        <td className="text-muted fs-6">0.03% or Rs. 20/executed order whichever is lower</td>
                        <td className="text-muted fs-6">₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">STT/CTT</th>
                        <td className="text-muted fs-6">0.01% on sell side (Non-Agri)</td>
                        <td className="text-muted fs-6">0.05% on sell side</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">Transaction charges</th>
                        <td className="text-muted fs-6">MCX: 0.0021%<br />NSE: 0.0001%</td>
                        <td className="text-muted fs-6">MCX: 0.0418%<br />NSE: 0.001%</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">GST</th>
                        <td colSpan="2" className="text-muted fs-6">18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">SEBI charges</th>
                        <td className="text-muted fs-6">
                            Agri:<br />
                            ₹1 / crore<br />
                            Non-agri:<br />
                            ₹10 / crore
                        </td>
                        <td className="text-muted fs-6">₹10 / crore</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">Stamp charges</th>
                        <td className="text-muted fs-6">0.002% or ₹200 / crore on buy side</td>
                        <td className="text-muted fs-6">0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>

            <div className="text-center mt-4">
                <h4><a href='#' style={{ textDecoration: "none" }}>Calculate your costs upfront</a> using our brokerage calculator</h4>
            </div>
        </>
    );
};

export default Commodity;
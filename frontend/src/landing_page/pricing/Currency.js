import React from 'react';


function Currency() {
    return (
        <div className='text-muted'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-muted fs-6">Currency futures</th>
                        <th scope="col" className="text-muted fs-6">Currency options</th>
                    </tr>
                </thead>
                <tbody className="text-muted">
                    <tr>
                        <th scope="row" className="text-muted fs-6">Brokerage</th>
                        <td className="text-muted fs-6">0.03% or ₹ 20/executed order whichever is lower</td>
                        <td className="text-muted fs-6">₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">STT/CTT</th>
                        <td className="text-muted fs-6">No STT</td>
                        <td className="text-muted fs-6">No STT</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">Transaction charges</th>
                        <td className="text-muted fs-6">NSE: 0.00035%<br />BSE: 0.00045%</td>
                        <td className="text-muted fs-6">NSE: 0.0311%<br />BSE: 0.001%</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">GST</th>
                        <td colSpan="2" className="text-muted fs-6">18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">SEBI charges</th>
                        <td className="text-muted fs-6">₹10 / crore</td>
                        <td className="text-muted fs-6">₹10 / crore</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted fs-6">Stamp charges</th>
                        <td className="text-muted fs-6">0.0001% or ₹10 / crore on buy side</td>
                        <td className="text-muted fs-6">0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>

            <div className="text-center mt-4 fs-6 text-muted">
                <h4><a href="#" style={{ textDecoration: "none" }} >Calculate your costs upfront</a> using our brokerage calculator</h4>
            </div>
        </div>
    );
};

export default Currency;
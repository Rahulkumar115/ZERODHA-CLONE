import React from 'react';

const SidePanel = () => {
  return (
    <div>
    <div className="support-side-panel ps-4">
      <ul className="list-unstyled">
        <li className="py-1">
          <a href="#" className="text-decoration-none">Surveillance measure on scrips - <br></br> September 2025</a>
        </li>
        <li className="py-1">
          <a href="#" className="text-decoration-none">Offer for sale (OFS) – September <br></br> 2025</a>
        </li>
      </ul>
    </div>
    <h6 className="mt-4 text-muted">Quick links</h6>
      <ol className="list-unstyled text-secondary">
        <li className="py-1"><a href='#' style={{textDecoration:"none"}} className='support-link'>1. Track account opening </a></li>
        <li className="py-1"><a href='#' style={{textDecoration:"none"}} className='support-link'>2. Track segment activation </a></li>
        <li className="py-1"><a href='#' style={{textDecoration:"none"}} className='support-link'>3. Intraday margins </a></li>
        <li className="py-1"><a href='#' style={{textDecoration:"none"}} className='support-link'>4. Kite user manual </a></li>
      </ol>
    </div>
  );
};

export default SidePanel;
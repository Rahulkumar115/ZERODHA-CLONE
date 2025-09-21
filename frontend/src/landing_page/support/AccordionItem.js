import React from 'react';

function AccordionItem({ id, title, icon, children }) {
    const collapseId = `collapse${id}`;
    const headingId = `heading${id}`;

    return (
        <div className="accordion-item mb-2">
            <h2 className="accordion-header" id={headingId}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false"
                    aria-controls={collapseId}
                >
                    <i className={`${icon} support-icon me-3`}></i>
                    {title}
                </button>
            </h2>
            <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#supportAccordion"
            >
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;
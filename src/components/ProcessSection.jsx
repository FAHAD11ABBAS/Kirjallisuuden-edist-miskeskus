import React from 'react';
import './ProcessSection.css';

function ProcessSection() {
    return (
        <section className="process-section" id="toiminta">
            <div className="container">
                <h2 className="section-title">Tekijänoikeuskorvaukset kiertoon</h2>
                <div className="process-image-wrapper">
                    <img src="/images/diagram.svg" alt="KIDE Toimintamalli -kaavio" className="process-img" />
                </div>
            </div>
        </section>
    )
}

export default ProcessSection;

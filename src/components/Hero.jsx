import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Kirjallisuuden Asialla</h1>
                    <p>
                        Kirjallisuuden edistämiskeskus KIDE toimii suomalaisen kirjallisuuden ja sen tekijöiden hyväksi.
                        Me varmistamme, että luova työ saa ansaitsemansa arvon ja teokset löytävät lukijansa.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Lue lisää</button>
                        <button className="btn-secondary">Hae apurahaa</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src="/images/hero-books.svg" alt="Person holding books" className="hero-img" />
                </div>
            </div>
        </section>
    )
}

export default Hero;

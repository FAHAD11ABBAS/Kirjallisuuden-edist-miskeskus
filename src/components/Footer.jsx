import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer" id="yhteystiedot">
            <div className="container footer-content">
                <div className="footer-column">
                    <h3>KIDE</h3>
                    <p>Kirjallisuuden edistämiskeskus</p>
                    <p>Linnankatu 1, 00100 Helsinki</p>
                </div>
                <div className="footer-column">
                    <h3>Yhteystiedot</h3>
                    <p>info@kide.fi</p>
                    <p>+358 40 123 4567</p>
                </div>
                <div className="footer-column">
                    <h3>Seuraa meitä</h3>
                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} KIDE - Kirjallisuuden edistämiskeskus ry. Kaikki oikeudet pidätetään.</p>
            </div>
        </footer>
    )
}

export default Footer;

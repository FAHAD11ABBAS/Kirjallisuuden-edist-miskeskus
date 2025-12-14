import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        {/* Kirjailijoiden kuvat */}
        <section className="authors-section" style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <img src="/images/faces-grid.svg" alt="Kirjailijoita" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App;

const projects = [
  {
    number: "01",
    name: "The Still House",
    place: "Hudson Valley, New York",
    type: "Residential · 2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    className: "project-tall"
  },
  {
    number: "02",
    name: "Casa de la Luz",
    place: "Oaxaca, Mexico",
    type: "Hospitality · 2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    className: "project-wide"
  },
  {
    number: "03",
    name: "A Quiet Practice",
    place: "Copenhagen, Denmark",
    type: "Workplace · 2024",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    className: "project-small"
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Arcline home">ARCLINE<span>®</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#studio">Our approach</a>
          <a href="#services">Expertise</a>
        </nav>
        <a className="header-contact" href="#contact">Start a conversation <span>↗</span></a>
        <a className="mobile-menu" href="#contact" aria-label="Contact">MENU <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-image" role="img" aria-label="Sculptural modern architecture framed by natural light" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>INDEPENDENT ARCHITECTURE STUDIO</span><span>NEW YORK · COPENHAGEN · EVERYWHERE</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> SPACE TO FEEL SOMETHING</p>
          <h1>Make room<br />for <em>feeling.</em></h1>
          <div className="hero-bottom">
            <p>We shape thoughtful spaces for living, gathering, and everything that makes us human.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
          </div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>FORM FOLLOWS FEELING</span></div>
      </section>

      <section className="intro section-pad" id="studio">
        <div className="section-kicker"><span>01 — A POINT OF VIEW</span><span>DESIGNING FOR THE HUMAN EXPERIENCE</span></div>
        <div className="intro-grid">
          <h2>Good spaces don’t just look a certain way.<br /><em>They make you feel a certain way.</em></h2>
          <div className="intro-note">
            <p>We believe architecture is more than what you see. It’s the morning light across the floor. The pause before you enter. The feeling of being exactly where you belong.</p>
            <a className="text-link" href="#contact">A little more about us <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div><span className="section-label">02 — SELECTED WORK</span><h2>Spaces with<br /><em>a point of view.</em></h2></div>
          <p>A collection of places shaped by their people, their context, and the lives unfolding inside them.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <a href="#contact" className="project-image" style={{ backgroundImage: `url("${project.image}")` }} aria-label={`Discuss a project like ${project.name}`}>
                <span className="project-number">{project.number}</span><span className="project-arrow">↗</span>
              </a>
              <div className="project-meta"><div><h3>{project.name}</h3><p>{project.place}</p></div><span>{project.type}</span></div>
            </article>
          ))}
        </div>
        <a className="text-link all-work" href="#contact">Have something in mind? Let’s talk <span>↗</span></a>
      </section>

      <section className="interlude">
        <div className="interlude-image" />
        <div className="interlude-overlay" />
        <div className="interlude-content"><span className="section-label">OUR DESIGN PHILOSOPHY</span><p>Less noise.<br />More <em>meaning.</em></p><span className="interlude-caption">A considered approach to the spaces we inhabit.</span></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker"><span>03 — WHAT WE DO</span><span>FROM FIRST THOUGHT TO FINAL DETAIL</span></div>
        <div className="services-layout">
          <h2>Thoughtful by<br /><em>design.</em></h2>
          <div className="service-list">
            <div className="service-row"><span>01</span><div><h3>Architecture</h3><p>Distinctive buildings grounded in place, purpose, and possibility.</p></div><span className="service-symbol">↗</span></div>
            <div className="service-row"><span>02</span><div><h3>Interior environments</h3><p>Material, light, and proportion working together in quiet harmony.</p></div><span className="service-symbol">↗</span></div>
            <div className="service-row"><span>03</span><div><h3>Creative direction</h3><p>A clear visual and spatial language for brands and experiences.</p></div><span className="service-symbol">↗</span></div>
            <div className="service-row"><span>04</span><div><h3>Spatial strategy</h3><p>Early thinking that turns ambitious ideas into grounded decisions.</p></div><span className="service-symbol">↗</span></div>
          </div>
        </div>
      </section>

      <section className="studio-note section-pad">
        <div className="studio-note-image" />
        <div className="studio-note-copy"><span className="section-label">A SMALL, INTENTIONAL STUDIO</span><h2>Curious minds.<br /><em>Considered work.</em></h2><p>We’re an independent team of architects, designers, and attentive listeners. We keep our studio deliberately small so every project gets the time, care, and clear thinking it deserves.</p><a className="text-link" href="#contact">Meet the studio <span>↗</span></a></div>
      </section>

      <section className="contact section-pad" id="contact">
        <span className="section-label">04 — THE NEXT CHAPTER</span>
        <h2>Have a space<br />in <em>mind?</em></h2>
        <div className="contact-bottom"><p>Tell us what you’re imagining.<br />We’ll take it from there.</p><a href="mailto:hello@arcline.studio" className="contact-button">Let’s talk <span>↗</span></a></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#">ARCLINE<span>®</span></a>
        <span className="footer-note">SPACE FOR WHAT MATTERS.</span>
        <div className="footer-links"><a href="#work">Instagram ↗</a><a href="mailto:hello@arcline.studio">Email ↗</a></div>
        <span className="copyright">© ARCLINE STUDIO 2025</span>
      </footer>
    </main>
  );
}
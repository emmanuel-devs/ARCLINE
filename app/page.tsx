const services = [
  ["01", "Residential Building", "Homes shaped around the people who live in them, with thoughtful details and a lasting sense of place."],
  ["02", "Business Tower", "Workplaces that balance clarity, ambition, and the energy of the city around them."],
  ["03", "Hospitality Tower", "Welcoming destinations with a distinctive point of view and an unmistakable sense of arrival."],
  ["04", "Industrial Building", "Purposeful spaces that bring performance, efficiency, and considered design together."],
  ["05", "Factory House", "Adaptable, well-planned environments designed to support the work happening inside."],
  ["06", "Educational House", "Learning environments that encourage curiosity, connection, and new ways of thinking."]
];

const projects = [
  { name: "The Still House", type: "Residential · 2025", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", className: "project-one" },
  { name: "Lines of Light", type: "Commercial · 2024", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85", className: "project-two" },
  { name: "A Quiet Practice", type: "Workplace · 2024", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", className: "project-three" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Arcline home"><span className="brand-mark">◇</span><span>Arcline</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">Home</a><a href="#about">About</a><a href="#services">Service</a><a href="#projects">Projects</a><a href="#journal">Blog</a>
        </nav>
        <a className="header-cta" href="#contact">Contact Us Now <span>↗</span></a>
        <a className="mobile-menu" href="#mobile-links">Menu <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="hero-top"><span>INDEPENDENT ARCHITECTURE STUDIO</span><span>NEW YORK · COPENHAGEN · EVERYWHERE</span></div>
        <div className="hero-content">
          <p className="hero-eyebrow"><span /> ARCHITECTURE WITH INTENTION</p>
          <h1>FROM CONCEPT TO<br /><span>BETTER LIVING</span></h1>
          <div className="hero-description"><p>We envision a world where every space we create enhances the quality of life for its occupants while contributing positively to its surroundings.</p><a href="#contact" className="pill-button">Book A Free Call <span>↗</span></a></div>
        </div>
        <div className="hero-foot"><span>01 / 04</span><span>DESIGNING FOR THE WAY WE LIVE</span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label">ABOUT US</div>
        <div className="about-main">
          <p className="about-lead">At Arcline, we believe that architecture is <strong>more than just designing buildings</strong>; it’s about <strong>creating spaces</strong> that inspire and transform lives. Our approach, founded on the principles of innovation, sustainability, and excellence, brings thoughtful design to everyday life.</p>
          <div className="about-feature">
            <div className="about-image" role="img" aria-label="Modern terracotta and glass architecture" />
            <div className="quote-card"><p>“We envision a world where every space we create enhances the quality of life for its occupants while contributing positively to the environment. Our goal is to set new standards in architecture through thoughtful, enduring design.”</p><div className="person"><span className="person-avatar">AR</span><div><strong>Alexandra Reed</strong><small>Principal Architect</small></div></div></div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-inner">
          <div className="center-heading"><span className="section-label">WHAT WE DO</span><h2>Comprehensive services<br />for optimal results.</h2></div>
          <div className="services-grid">{services.map(([number, title, description]) => <article className="service-card" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><a href="#contact">View More <span>↗</span></a></article>)}</div>
        </div>
      </section>

      <section className="film-strip" aria-label="A glimpse into our architecture"><div className="film-image" /><div className="film-overlay" /><a href="#projects" className="play-button" aria-label="Explore our projects">▶</a><span className="film-caption">DESIGNED TO BE EXPERIENCED</span></section>

      <section className="proof-section">
        <div className="stats-card"><div><strong>20<span>+</span></strong><small>Years in Business</small></div><div><strong>42</strong><small>Awards & Recognition</small></div><div><strong>130</strong><small>Projects Completed</small></div><div><strong>2k<span>+</span></strong><small>People Inspired</small></div></div>
        <div className="proof-right"><article className="testimonial"><span className="section-label">CLIENT STORIES</span><p>“From the first conversation to the final walkthrough, the team brought exceptional care, clarity, and attention to detail to every decision.”</p><div className="testimonial-by"><span className="person-avatar">JS</span><div><strong>Jordan Simmons</strong><small>Residential client</small></div></div><div className="testimonial-arrows"><span>←</span><span>→</span></div></article><div className="clients"><span>TRUSTED BY TEAMS AT</span><div className="client-logos"><b>nord</b><b>◈ Luma</b><b>NRTH</b><b>◉ Forma</b><b>LINE /</b></div></div></div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-heading"><div><span className="section-label">SELECTED WORK · 2022—2025</span><h2>Take a look at our<br />recent projects.</h2></div><a href="#contact" className="blue-button">See All Projects <span>↗</span></a></div>
        <div className="projects-grid">{projects.map((project, index) => <article className={`project-card ${project.className}`} key={project.name}><a className="project-image" href="#contact" style={{ backgroundImage: `url("${project.image}")` }} aria-label={`Discuss a project like ${project.name}`}><span className="project-index">0{index + 1}</span><span className="project-arrow">↗</span></a><div className="project-meta"><h3>{project.name}</h3><span>{project.type}</span></div></article>)}</div>
      </section>

      <section className="journal-section" id="journal"><div className="journal-heading"><div><span className="section-label">FROM THE JOURNAL</span><h2>Articles and resources.</h2></div><a href="#contact" className="text-link">Explore insights <span>↗</span></a></div><div className="journal-grid"><article><div className="journal-image journal-one" /><span>THINKING · 06 MIN READ</span><h3>How thoughtful architecture changes the way we live</h3><a href="#contact">Read article ↗</a></article><article><div className="journal-image journal-two" /><span>MATERIALS · 04 MIN READ</span><h3>Choosing materials that age with grace</h3><a href="#contact">Read article ↗</a></article><article><div className="journal-image journal-three" /><span>PROCESS · 05 MIN READ</span><h3>From first sketch to a place that feels like home</h3><a href="#contact">Read article ↗</a></article></div></section>

      <section className="contact-section" id="contact"><span className="section-label">HAVE A PROJECT IN MIND?</span><h2>Let’s build something<br /><em>meaningful.</em></h2><div className="contact-bottom"><p>Have an idea, a site, or just the beginning of a thought?<br />We’d love to hear about it.</p><a className="blue-button" href="mailto:hello@arcline.studio">Start a conversation <span>↗</span></a></div></section>

      <footer className="site-footer" id="mobile-links"><a className="brand footer-brand" href="#"><span className="brand-mark">◇</span><span>Arcline</span></a><span className="footer-tagline">SPACES THAT MOVE US.</span><div className="footer-links"><a href="#projects">Projects</a><a href="#journal">Journal</a><a href="mailto:hello@arcline.studio">Contact ↗</a></div><small>© ARCLINE STUDIO 2026</small></footer>
    </main>
  );
}

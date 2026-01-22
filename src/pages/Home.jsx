const Home = () => (
  <>
    <section className="hero">
      <div className="hero-card">
        <h1>We build calm, resilient clouds for growing businesses.</h1>
        <p>
          Kloud Maker is a cloud solution provider headquartered in Indore, Madhya Pradesh. We design, automate, and
          secure GCP environments so teams can ship faster and operate with confidence.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/contact">
            Start a Project
          </a>
          <a className="button secondary" href="/about">
            Explore Our Story
          </a>
        </div>
        <div className="stat-grid">
          <div className="stat">
            <h3>40+</h3>
            <p>GCP cloud migrations delivered</p>
          </div>
          <div className="stat">
            <h3>99.95%</h3>
            <p>Average uptime across managed platforms</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Remote reliability engineering coverage</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="section-title">GCP expertise that scales with you</h2>
        <p>
          We help product and platform teams move from reactive firefighting to proactive cloud operations. Our
          specialists align architecture, security, and financial controls with your product roadmap.
        </p>
        <div className="service-grid service-grid-spaced">
          <div className="service-card">
            <h4>DevOps Enablement</h4>
            <p>CI/CD pipelines, infrastructure as code, and automation blueprints purpose-built for GCP.</p>
          </div>
          <div className="service-card">
            <h4>DevSecOps</h4>
            <p>Continuous compliance, security scanning, and policy guardrails embedded in every release.</p>
          </div>
          <div className="service-card">
            <h4>SRE &amp; Reliability</h4>
            <p>Service level objectives, incident response drills, and observability tuned for resilient teams.</p>
          </div>
          <div className="service-card">
            <h4>FinOps</h4>
            <p>Cloud cost allocation, budget alerts, and optimization playbooks to keep spend predictable.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2 className="section-title">Why teams choose Kloud Maker</h2>
      <div className="service-grid">
        <div className="service-card">
          <h4>GCP-first architects</h4>
          <p>We align services such as GKE, Cloud Run, and BigQuery with your product milestones.</p>
        </div>
        <div className="service-card">
          <h4>Outcome-focused delivery</h4>
          <p>Every roadmap is centered on reliability, performance, and secure, cost-efficient growth.</p>
        </div>
        <div className="service-card">
          <h4>Local heart, global reach</h4>
          <p>Rooted in Indore with experts collaborating across India and APAC time zones.</p>
        </div>
      </div>
    </section>
  </>
);

export default Home;

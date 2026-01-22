const About = () => (
  <>
    <section className="hero">
      <div className="hero-card">
        <h1>About Kloud Maker</h1>
        <p>
          Kloud Maker Company is a GCP-focused cloud solution provider based in Indore, Madhya Pradesh. We partner
          with founders, CTOs, and platform teams to turn cloud complexity into measurable business outcomes.
        </p>
        <p>
          Our engineers have built observability stacks, security automation, and cost governance programs for
          fintech, SaaS, and digital-first brands. We believe cloud operations should feel calm, predictable, and
          data-driven—so every engagement is tailored to measurable SLOs and stakeholder KPIs.
        </p>
      </div>
      <div>
        <h2 className="section-title">What we stand for</h2>
        <div className="about-grid">
          <div className="about-card">
            <h4>Reliability by design</h4>
            <p>We embed SRE best practices, error budgets, and incident readiness into every delivery.</p>
          </div>
          <div className="about-card">
            <h4>Security that scales</h4>
            <p>From DevSecOps pipelines to IAM governance, we keep your data protected at every layer.</p>
          </div>
          <div className="about-card">
            <h4>Financial clarity</h4>
            <p>Our FinOps playbooks align cloud spend with business value, not just raw infrastructure costs.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2 className="section-title">Our delivery model</h2>
      <div className="service-grid">
        <div className="service-card">
          <h4>Discovery &amp; Assessment</h4>
          <p>Architecture reviews, workload mapping, and cloud maturity scoring customized to your goals.</p>
        </div>
        <div className="service-card">
          <h4>Blueprint &amp; Build</h4>
          <p>Infrastructure as code, security guardrails, and automated pipelines built with your teams.</p>
        </div>
        <div className="service-card">
          <h4>Operate &amp; Optimize</h4>
          <p>Continuous SRE engagement, on-call enablement, and monthly FinOps optimization sprints.</p>
        </div>
      </div>
    </section>
  </>
);

export default About;

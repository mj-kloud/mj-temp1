const Contact = () => (
  <section className="hero">
    <div className="hero-card">
      <h1>Contact our cloud experts</h1>
      <p>
        Ready to improve reliability, security, and cost governance on Google Cloud Platform? Share your goals and our
        team will follow up with a tailored cloud roadmap.
      </p>
      <div className="stat-grid">
        <div className="stat">
          <h3>Indore</h3>
          <p>Madhya Pradesh, India</p>
        </div>
        <div className="stat">
          <h3>Response</h3>
          <p>Within 1 business day</p>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <h2 className="section-title">Send us a message</h2>
      <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
        <div className="form-grid">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-grid">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="form-grid">
          <label htmlFor="query">Project Details</label>
          <textarea id="query" name="query" placeholder="Tell us about your cloud goals" required></textarea>
        </div>
        <button className="button primary" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  </section>
);

export default Contact;

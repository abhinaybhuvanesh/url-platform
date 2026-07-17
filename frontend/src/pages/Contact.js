function Contact() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h2>Contact</h2>
        <p className="subtitle">We typically respond within 2–3 business days</p>
      </div>

      <section>
        <h3>General Inquiries</h3>
        <div className="legal-text">
          <p>
            For questions about how SwiftByte works, feature requests, or general
            feedback, reach out via email below.
          </p>
          <p>
            <a href="mailto:abhinaybhuvanesh01@gmail.com">abhinaybhuvanesh01@gmail.com</a>
          </p>
        </div>
      </section>

      <section>
        <h3>Bug Reports & Source Code</h3>
        <div className="legal-text">
          <p>
            SwiftByte is an open-source project. Bug reports and contributions are welcome
            through the GitHub repository.
          </p>
          <p>
            <a href="https://github.com/abhinaybhuvanesh" target="_blank" rel="noreferrer">
              github.com/abhinaybhuvanesh
            </a>
          </p>
        </div>
      </section>

      <section>
        <h3>Connect on LinkedIn</h3>
        <div className="legal-text">
          <p>
            Feel free to connect or reach out directly on LinkedIn as well.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/abhinaybhuvanesh/" target="_blank" rel="noreferrer">
              linkedin.com/in/abhinaybhuvanesh
            </a>
          </p>
        </div>
      </section>

      <section>
        <h3>Data & Privacy Requests</h3>
        <div className="legal-text">
          <p>
            To request deletion of your account or associated data, please email us with
            the subject line "Data Deletion Request" from the email address associated
            with your account.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
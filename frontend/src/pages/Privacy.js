function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h2>Privacy Policy</h2>
        <p className="subtitle">Effective date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h3>Information We Collect</h3>
        <div className="legal-text">
          <p>
            When you register an account, we collect your name and email address. When
            you create a shortened link, we store the destination URL, the generated short
            code, and associated analytics, including click counts, approximate device and
            browser type, and country of origin, derived from standard request metadata.
          </p>
        </div>
      </section>

      <section>
        <h3>How Information Is Used</h3>
        <div className="legal-text">
          <p>
            Collected information is used exclusively to operate core functionality of the
            Service: authenticating your account, associating shortened links with your
            account, and displaying usage analytics on your personal dashboard. We do not
            use your data for advertising purposes.
          </p>
        </div>
      </section>

      <section>
        <h3>Password Security</h3>
        <div className="legal-text">
          <p>
            Account passwords are never stored in plain text. All passwords are processed
            through a one-way cryptographic hashing algorithm (bcrypt) prior to storage,
            meaning the original password cannot be retrieved, even by the Service
            operator.
          </p>
        </div>
      </section>

      <section>
        <h3>Data Sharing & Third Parties</h3>
        <div className="legal-text">
          <p>
            We do not sell, rent, or share your personal information with third parties
            for marketing purposes. Data may be disclosed if required by law or to protect
            the rights, property, or safety of the Service, its users, or the public.
          </p>
        </div>
      </section>

      <section>
        <h3>Data Retention & Deletion</h3>
        <div className="legal-text">
          <p>
            Your account and associated link data are retained for as long as your
            account remains active. You may request permanent deletion of your account and
            all associated data at any time via the Contact page.
          </p>
        </div>
      </section>

      <section>
        <h3>Local Storage</h3>
        <div className="legal-text">
          <p>
            The Service uses your browser's local storage to persist your login session.
            This data remains on your device and is not transmitted to or accessible by
            third parties.
          </p>
        </div>
      </section>

      <section>
        <h3>Changes to This Policy</h3>
        <div className="legal-text">
          <p>
            This Privacy Policy may be updated periodically to reflect changes in practice
            or legal requirements. Continued use of the Service after such changes
            constitutes acceptance of the revised policy.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
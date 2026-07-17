function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h2>Terms of Service</h2>
        <p className="subtitle">Effective date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h3>Acceptance of Terms</h3>
        <div className="legal-text">
          <p>
            These Terms of Service ("Terms") govern your access to and use of SwiftByte, operated as an independent software project. By creating an
            account or otherwise using the Service, you acknowledge that you have read,
            understood, and agree to be bound by these Terms in their entirety.
          </p>
        </div>
      </section>

      <section>
        <h3>Description of Service</h3>
        <div className="legal-text">
          <p>
            SwiftByte provides URL shortening functionality, including the generation of
            shortened links, redirection services, and click analytics such as
            approximate geographic origin, device type, and referrer information for
            authenticated users.
          </p>
          <p>
            Certain features, including link history, analytics dashboards, and custom
            aliases, are only available to registered users.
          </p>
        </div>
      </section>

      <section>
        <h3>Acceptable Use</h3>
        <div className="legal-text">
          <p>
            You agree not to use the Service to generate or distribute links to content
            that is unlawful, fraudulent, or harmful, including but not limited to:
            phishing or credential-harvesting pages, distribution of malware or exploit
            code, infringement of intellectual property rights, or content prohibited
            under applicable law in your jurisdiction.
          </p>
          <p>
            Automated or bulk creation of shortened links intended to circumvent rate
            limiting or abuse the Service's infrastructure is prohibited.
          </p>
        </div>
      </section>

      <section>
        <h3>Account Responsibility</h3>
        <div className="legal-text">
          <p>
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activity that occurs under your account. You agree to
            notify the Service operator promptly of any unauthorized access.
          </p>
        </div>
      </section>

      <section>
        <h3>Enforcement</h3>
        <div className="legal-text">
          <p>
            SwiftByte reserves the right, at its sole discretion and without prior notice,
            to disable, remove, or decline to generate any shortened link found to violate
            these Terms, and to suspend or terminate accounts associated with such
            violations.
          </p>
        </div>
      </section>

      <section>
        <h3>Disclaimer & Limitation of Liability</h3>
        <div className="legal-text">
          <p>
            The Service is provided on an "as is" and "as available" basis, without
            warranties of any kind, whether express or implied, including but not limited
            to warranties of merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
          <p>
            To the maximum extent permitted by applicable law, the Service operator shall
            not be liable for any indirect, incidental, special, or consequential damages
            arising out of or related to your use of the Service.
          </p>
        </div>
      </section>

      <section>
        <h3>Changes to These Terms</h3>
        <div className="legal-text">
          <p>
            These Terms may be revised periodically. Material changes will be reflected by
            updating the effective date above. Continued use of the Service following any
            revision constitutes acceptance of the updated Terms.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Terms;
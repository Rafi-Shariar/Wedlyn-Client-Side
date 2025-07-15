import { FaShieldAlt, FaUserCheck, FaLock, FaGavel } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Terms & Conditions</h1>
        <p className="text-gray-500">Effective Date: July 15, 2025</p>
      </div>

      {/* Section: Introduction */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaShieldAlt className="text-primary" /> 1. Acceptance of Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing or using our website, mobile application, or any related services (“Services”), you agree to be
          bound by these Terms and Conditions (“Terms”). If you do not agree with these Terms, you may not use the
          Services.
        </p>
      </section>

      {/* Section: Account Use */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaUserCheck className="text-primary" /> 2. User Eligibility & Account Responsibilities
        </h2>
        <p className="text-gray-700 leading-relaxed">
          You must be at least 18 years old and legally eligible to marry under the laws of your country. You are
          responsible for maintaining the confidentiality of your login credentials and for all activities that occur
          under your account.
        </p>
      </section>

      {/* Section: User Conduct */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. User Conduct</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Do not post false, misleading, or offensive content.</li>
          <li>Respect other members. Harassment, threats, or abuse are strictly prohibited.</li>
          <li>Do not use the service for commercial purposes or spam.</li>
          <li>You may not impersonate another person or create fake identities.</li>
        </ul>
      </section>

      {/* Section: Privacy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaLock className="text-primary" /> 4. Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your privacy is important to us. Our Privacy Policy outlines how your personal data is collected, used, and
          protected. By using the service, you agree to our Privacy Policy.
        </p>
      </section>

      {/* Section: Content Rights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">5. User-Generated Content</h2>
        <p className="text-gray-700 leading-relaxed">
          You retain ownership of any content you submit, but you grant us a non-exclusive, royalty-free, worldwide
          license to use, display, and distribute your content in connection with the Services.
        </p>
      </section>

      {/* Section: Termination */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">6. Termination of Access</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any
          reason, including but not limited to violation of these Terms.
        </p>
      </section>

      {/* Section: Legal Disclaimer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FaGavel className="text-primary" /> 7. Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We do not guarantee that you will find a suitable match through our platform. The Services are provided “as
          is” without warranty of any kind. We are not liable for any damages resulting from your use of the Services.
        </p>
      </section>

      {/* Section: Changes to Terms */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">8. Modifications to These Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to update or change these Terms at any time. Continued use of the Services after changes
          indicates your acceptance of the new Terms.
        </p>
      </section>

      {/* Section: Contact Info */}
      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have questions about these Terms, please contact our support team at{" "}
          <span className="text-primary font-medium">support@wedlyn.com</span>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

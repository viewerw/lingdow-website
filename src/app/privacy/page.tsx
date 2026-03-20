import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Lingdow",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: March 20, 2025</p>

        <p>
          Lingdow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use
          our mobile application and related services (collectively, the
          &quot;Service&quot;).
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Account Information</h3>
        <p>
          When you create an account, we collect your email address and
          authentication credentials. If you sign in through a third-party
          service (such as Google), we receive basic profile information from
          that provider.
        </p>

        <h3>1.2 Usage Data</h3>
        <p>
          We automatically collect certain information when you use the Service,
          including:
        </p>
        <ul>
          <li>Videos you watch and interact with</li>
          <li>Words and sentences you save</li>
          <li>Language preferences and settings</li>
          <li>Device information (device model, operating system version)</li>
          <li>App usage statistics</li>
        </ul>

        <h3>1.3 Speech Data</h3>
        <p>
          When you use the shadow reading feature, audio recordings are
          processed for speech recognition and pronunciation scoring. We do not
          store your voice recordings after processing.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the Service</li>
          <li>Personalize your learning experience</li>
          <li>
            Generate bilingual subtitles and AI-powered translations
          </li>
          <li>Track your learning progress and vocabulary</li>
          <li>Send you service-related communications</li>
          <li>Respond to your inquiries and support requests</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>
          Lingdow does not sell, trade, or share your personal data with
          third-party companies for marketing purposes. We may share your
          information only in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We work with third-party vendors
            who assist us in operating the Service (e.g., cloud hosting,
            analytics). These providers are contractually obligated to protect
            your data.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law or in response to valid legal
            requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of that transaction.
          </li>
        </ul>

        <h2>4. AI and Data Processing</h2>
        <p>
          Lingdow uses AI services for translation, word lookup, and content
          summarization. We do not use your personal data to train AI models.
          Content processed by AI services is used solely to provide you with
          real-time language learning features.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is
          active or as needed to provide you with the Service. You may request
          deletion of your account and associated data at any time through the
          app settings.
        </p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal data</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your personal data</li>
          <li>Restrict or object to the processing of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          The Service is not intended for children under the age of 16. We do
          not knowingly collect personal information from children under 16. If
          we discover that we have inadvertently collected such information, we
          will take steps to delete it promptly.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the new policy in the app or
          sending you an email. Your continued use of the Service after such
          changes constitutes your acceptance of the updated policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
        </p>
      </article>
    </div>
  );
}

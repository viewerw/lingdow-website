import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Lingdow",
};

export default function TermsOfUse() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Use</h1>
        <p className="text-gray-400 mb-8">Last updated: March 20, 2025</p>

        <p>
          Welcome to Lingdow. By accessing or using our mobile application and
          related services (collectively, the &quot;Service&quot;), you agree to
          be bound by these Terms of Use (&quot;Terms&quot;). Please read them
          carefully.
        </p>

        <h2>1. Account Registration</h2>
        <p>
          To use certain features of the Service, you must create an account by
          providing a valid email address and password, or by signing in through
          a third-party authentication provider. You are responsible for
          maintaining the confidentiality of your account credentials and for
          all activities that occur under your account.
        </p>

        <h2>2. License to Use the Service</h2>
        <p>
          Lingdow grants you a limited, non-exclusive, non-transferable,
          revocable license to use the Service for your personal, non-commercial
          language learning purposes. You may not:
        </p>
        <ul>
          <li>
            Reproduce, redistribute, sell, rent, sublicense, or publicly display
            any content from the Service
          </li>
          <li>
            Use the Service for any commercial purpose without our prior written
            consent
          </li>
          <li>
            Reverse engineer, decompile, or disassemble any part of the Service
          </li>
          <li>
            Use automated tools to scrape, extract, or collect data from the
            Service
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Service
          </li>
        </ul>

        <h2>3. Content and Intellectual Property</h2>
        <p>
          The Service provides access to video content from third-party
          platforms (such as YouTube) for language learning purposes. Lingdow
          does not claim ownership of third-party content. All Lingdow-generated
          content, including translations, summaries, and learning materials, is
          the intellectual property of Lingdow.
        </p>

        <h2>4. User-Generated Content</h2>
        <p>
          By submitting any content through the Service (such as feedback or
          learning notes), you grant Lingdow a worldwide, royalty-free,
          non-exclusive license to use, reproduce, and distribute such content
          in connection with the Service. You represent that any content you
          submit does not infringe the rights of any third party.
        </p>

        <h2>5. Subscription and Payments</h2>
        <p>
          Certain features of the Service require a paid subscription.
          Subscription details, including pricing and billing periods, are
          presented at the time of purchase. By subscribing, you agree to the
          following:
        </p>
        <ul>
          <li>
            Subscriptions are billed in advance on a monthly or annual basis
          </li>
          <li>
            You may cancel your subscription at any time through your Apple ID
            account settings
          </li>
          <li>
            Refunds are subject to Apple&apos;s App Store refund policies
          </li>
          <li>
            We reserve the right to change subscription pricing with reasonable
            notice
          </li>
        </ul>

        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time if
          you violate these Terms or engage in conduct that we determine to be
          harmful to other users or the Service. Upon termination, your right to
          use the Service will immediately cease. You may also request account
          deletion at any time through the app settings. Upon account deletion,
          your personally identifiable information will be removed from our
          systems.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, whether express or
          implied. We do not guarantee that the Service will be uninterrupted,
          error-free, or free of harmful components. Translation and AI-generated
          content may contain inaccuracies and should not be relied upon as the
          sole source of language learning.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Lingdow shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the Service,
          including but not limited to loss of data, revenue, or profits.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will
          notify you of material changes by posting the updated Terms in the
          app or sending you an email. Your continued use of the Service after
          such changes constitutes your acceptance of the updated Terms. If you
          disagree with the changes, you may terminate your account.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the People&apos;s Republic of China, without regard to its
          conflict of law provisions.
        </p>

        <h2>11. Entire Agreement</h2>
        <p>
          These Terms, together with our{" "}
          <a
            href="/privacy"
            className="text-purple-400 hover:text-purple-300"
          >
            Privacy Policy
          </a>
          , constitute the entire agreement between you and Lingdow regarding
          the use of the Service.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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

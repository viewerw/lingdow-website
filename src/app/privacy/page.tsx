import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Lingdow",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: March 20, 2026</p>

        <p>
          Lingdow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use
          our mobile application and related services (collectively, the
          &quot;Service&quot;). By using the Service, you consent to the data
          practices described in this Privacy Policy. If you do not agree with
          the terms of this Privacy Policy, please do not access or use the
          Service.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect several types of information from and about users of our
          Service, including the categories described below.
        </p>

        <h3>1.1 Account Information</h3>
        <p>
          When you create an account, we collect your email address and
          authentication credentials. If you sign in through a third-party
          service (such as Google Sign-In), we receive basic profile information
          from that provider, which may include your name, email address, and
          profile picture URL. We do not receive or store your Google account
          password.
        </p>

        <h3>1.2 Usage Data</h3>
        <p>
          We automatically collect certain information when you use the Service,
          including:
        </p>
        <ul>
          <li>Videos you watch, browse, and interact with</li>
          <li>Words and sentences you save to your vocabulary lists</li>
          <li>Language preferences, learning settings, and interface language</li>
          <li>Watch history and video progress timestamps</li>
          <li>Shadow reading practice sessions and scores</li>
          <li>Subtitle search queries</li>
          <li>Feature usage patterns and frequency</li>
          <li>App session duration and time spent on various features</li>
        </ul>

        <h3>1.3 Device Information</h3>
        <p>
          We collect information about the device you use to access the Service,
          including:
        </p>
        <ul>
          <li>Device model and manufacturer</li>
          <li>Operating system type and version (e.g., iOS 17.0)</li>
          <li>Unique device identifiers (such as IDFV - Identifier for Vendors)</li>
          <li>App version and build number</li>
          <li>Device language and locale settings</li>
          <li>Time zone</li>
          <li>Network connection type (Wi-Fi or cellular)</li>
        </ul>

        <h3>1.4 Speech Data</h3>
        <p>
          When you use the shadow reading feature, audio recordings are
          processed on-device using Apple&apos;s Speech Recognition framework
          for speech-to-text conversion and pronunciation evaluation. Audio
          data is processed locally on your device and is not transmitted to
          our servers. We do not store your voice recordings. Only the
          resulting text transcription and pronunciation scores are retained
          to display your practice results.
        </p>

        <h3>1.5 Translation and AI Query Data</h3>
        <p>
          When you use our word lookup, sentence translation, or AI-powered
          features, the text you submit (such as words, phrases, or sentences)
          is sent to third-party AI and translation services for processing.
          We do not persistently log the content of these queries on our own
          servers beyond what is necessary to deliver the response to you in
          real time.
        </p>

        <h3>1.6 Subscription and Purchase Information</h3>
        <p>
          If you purchase a subscription, Apple processes and stores your
          payment information. We do not collect, store, or have access to your
          credit card number, bank account details, or other financial
          information. We receive from Apple a transaction receipt, subscription
          status, expiration date, and product identifier to manage your access
          to premium features.
        </p>

        <h3>1.7 Information You Provide Directly</h3>
        <p>
          We collect information you provide when you contact our support team,
          submit feedback, report a problem, or otherwise communicate with us,
          including your email address and the content of your message.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>Providing the Service:</strong> To operate, maintain,
            deliver, and improve the features and functionality of the Service,
            including generating bilingual subtitles, AI-powered translations,
            word definitions, and example sentences.
          </li>
          <li>
            <strong>Personalization:</strong> To personalize your learning
            experience, including recommending content based on your language
            level, preferences, and learning history.
          </li>
          <li>
            <strong>Progress Tracking:</strong> To track and display your
            learning progress, vocabulary lists, saved sentences, and watch
            history.
          </li>
          <li>
            <strong>Account Management:</strong> To create, maintain, and
            secure your account, and to authenticate your identity.
          </li>
          <li>
            <strong>Subscription Management:</strong> To verify your
            subscription status, manage access to premium features, and process
            renewals.
          </li>
          <li>
            <strong>Communications:</strong> To send you service-related
            communications, such as account verification emails, security
            alerts, subscription reminders, and responses to your inquiries.
          </li>
          <li>
            <strong>Analytics and Improvement:</strong> To understand how users
            interact with the Service, identify trends, diagnose technical
            issues, and improve the quality and performance of the Service.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws,
            regulations, legal processes, or enforceable governmental requests.
          </li>
          <li>
            <strong>Safety and Security:</strong> To detect, prevent, and
            address fraud, abuse, security risks, and technical issues.
          </li>
        </ul>

        <h2>3. Third-Party Services and SDKs</h2>
        <p>
          We use the following third-party services to operate the Service.
          Each of these services may collect information as described in their
          own privacy policies:
        </p>

        <h3>3.1 Supabase (Authentication and Database)</h3>
        <p>
          We use Supabase to manage user authentication (email/password and
          Google Sign-In) and to store user data such as account information,
          vocabulary lists, saved sentences, and learning preferences. Supabase
          processes and stores data on secure cloud servers. For more
          information, see the{" "}
          <a
            href="https://supabase.com/privacy"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supabase Privacy Policy
          </a>
          .
        </p>

        <h3>3.2 OpenAI (AI-Powered Features)</h3>
        <p>
          We use OpenAI&apos;s API to provide word definitions, contextual
          explanations, and AI-powered language learning features. When you
          use these features, the text of your query (word, phrase, or sentence)
          is sent to OpenAI for processing. OpenAI does not use API inputs to
          train their models. For more information, see the{" "}
          <a
            href="https://openai.com/policies/privacy-policy"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Privacy Policy
          </a>
          .
        </p>

        <h3>3.3 DeepL (Translation)</h3>
        <p>
          We use the DeepL API to provide high-quality sentence and subtitle
          translations. Text submitted for translation is sent to DeepL&apos;s
          servers for processing. For more information, see the{" "}
          <a
            href="https://www.deepl.com/privacy"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeepL Privacy Policy
          </a>
          .
        </p>

        <h3>3.4 Apple Speech Framework (Speech Recognition)</h3>
        <p>
          We use Apple&apos;s built-in Speech Recognition framework for the
          shadow reading feature. Speech processing occurs on-device and is
          governed by Apple&apos;s privacy practices. We request microphone
          and speech recognition permissions before using this feature. For
          more information, see{" "}
          <a
            href="https://www.apple.com/privacy/"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&apos;s Privacy Policy
          </a>
          .
        </p>

        <h3>3.5 YouTube API Services</h3>
        <p>
          The Service accesses video content and subtitle data through
          YouTube&apos;s API Services. By using the Service, you are also
          bound by{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          . We do not host or store YouTube video content on our servers.
          Videos are streamed directly from YouTube&apos;s platform.
        </p>

        <h3>3.6 Google Sign-In</h3>
        <p>
          If you choose to sign in with Google, the authentication process is
          handled by Google&apos;s OAuth 2.0 service. We receive only the
          profile information you authorize (typically name, email, and
          profile photo). We do not access your Google contacts, files, or any
          other Google account data.
        </p>

        <h3>3.7 Apple In-App Purchase</h3>
        <p>
          Subscription payments are processed entirely by Apple through the
          App Store. We do not collect or store any payment card information.
          Apple&apos;s payment processing is subject to{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="text-purple-400 hover:text-purple-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&apos;s Privacy Policy
          </a>
          .
        </p>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          Lingdow does not sell, rent, trade, or otherwise share your personal
          data with third-party companies for their marketing or advertising
          purposes. We may share your information only in the following
          circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We share information with
            third-party service providers who perform services on our behalf,
            as described in Section 3 above (Supabase, OpenAI, DeepL). These
            providers are contractually obligated to use your information only
            to provide services to us and to protect your data consistent with
            this Privacy Policy.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law, court order, subpoena, or
            other legal process, or if we believe in good faith that such
            disclosure is necessary to comply with applicable law, protect our
            rights or property, or protect the safety of our users or the
            public.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, reorganization, bankruptcy, or sale of all or a
            portion of our assets, your information may be transferred as part
            of that transaction. We will notify you via email or prominent
            notice within the app before your information becomes subject to a
            different privacy policy.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            for any other purpose with your explicit consent.
          </li>
        </ul>

        <h2>5. AI and Data Processing</h2>
        <p>
          Lingdow uses AI services (OpenAI and DeepL) for translation, word
          lookup, contextual explanations, and content summarization. Important
          details about our AI data practices:
        </p>
        <ul>
          <li>We do not use your personal data to train AI models.</li>
          <li>
            Content processed by AI services is used solely to provide you
            with real-time language learning features.
          </li>
          <li>
            We do not combine AI query data with your personal identity for
            profiling or advertising purposes.
          </li>
          <li>
            AI-generated translations, definitions, and explanations may
            contain inaccuracies and should be used as learning aids, not as
            authoritative references.
          </li>
          <li>
            Our AI service providers (OpenAI) have committed not to use API
            inputs to train their models.
          </li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. These measures include:
        </p>
        <ul>
          <li>Encryption of data in transit using TLS/SSL</li>
          <li>Encryption of sensitive data at rest</li>
          <li>Secure authentication mechanisms with hashed passwords</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls limiting employee access to personal data</li>
          <li>Use of secure, reputable cloud infrastructure providers</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or method of
          electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your personal information,
          we cannot guarantee its absolute security. If we become aware of a
          security breach that affects your personal information, we will
          notify you in accordance with applicable law.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is
          active or as needed to provide you with the Service. Specifically:
        </p>
        <ul>
          <li>
            <strong>Account Data:</strong> Retained for the lifetime of your
            account. Upon account deletion, your account data is permanently
            deleted within 30 days.
          </li>
          <li>
            <strong>Learning Data:</strong> Your saved words, sentences, watch
            history, and learning progress are retained while your account is
            active and deleted when you delete your account.
          </li>
          <li>
            <strong>Speech Data:</strong> Voice recordings are processed
            on-device in real time and are not stored or retained by us.
          </li>
          <li>
            <strong>AI Query Data:</strong> Text sent to AI services for
            translation or lookup is processed in real time and is not
            persistently stored by us.
          </li>
          <li>
            <strong>Support Communications:</strong> Records of your
            communications with our support team may be retained for up to
            2 years to help us improve our support services.
          </li>
          <li>
            <strong>Aggregated and Anonymized Data:</strong> We may retain
            aggregated, anonymized, or de-identified data that can no longer
            be associated with you for analytical purposes indefinitely.
          </li>
        </ul>
        <p>
          You may request deletion of your account and all associated personal
          data at any time through the app settings or by contacting us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
          .
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding
          your personal information. These rights may include:
        </p>
        <ul>
          <li>
            <strong>Right of Access:</strong> You have the right to request a
            copy of the personal data we hold about you.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You have the right to
            request that we correct inaccurate or incomplete personal data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> You have the right to request
            that we delete your personal data, subject to certain exceptions
            (such as data we are legally required to retain).
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You have the right
            to request that we restrict the processing of your personal data
            under certain circumstances.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You have the right to
            receive your personal data in a structured, commonly used, and
            machine-readable format and to transmit it to another controller.
          </li>
          <li>
            <strong>Right to Object:</strong> You have the right to object to
            the processing of your personal data for certain purposes,
            including direct marketing.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where we rely on your
            consent to process your personal data, you have the right to
            withdraw that consent at any time.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
          . We will respond to your request within 30 days. We may ask you to
          verify your identity before processing your request.
        </p>

        <h2>9. European Economic Area (EEA) and UK Users - GDPR</h2>
        <p>
          If you are located in the European Economic Area (EEA) or the United
          Kingdom, you have additional rights under the General Data Protection
          Regulation (GDPR) and the UK GDPR, respectively.
        </p>
        <h3>Legal Basis for Processing</h3>
        <p>We process your personal data on the following legal bases:</p>
        <ul>
          <li>
            <strong>Performance of a Contract:</strong> Processing necessary to
            provide you with the Service (e.g., account creation, delivering
            language learning features, managing subscriptions).
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Processing necessary for our
            legitimate interests, such as improving the Service, ensuring
            security, and conducting analytics, provided these interests are not
            overridden by your data protection rights.
          </li>
          <li>
            <strong>Consent:</strong> Processing based on your consent, such as
            when you opt in to speech recognition features. You may withdraw
            consent at any time.
          </li>
          <li>
            <strong>Legal Obligation:</strong> Processing necessary to comply
            with applicable laws and regulations.
          </li>
        </ul>
        <h3>Data Protection Officer</h3>
        <p>
          For GDPR-related inquiries, you may contact us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
          . You also have the right to lodge a complaint with your local data
          protection supervisory authority.
        </p>

        <h2>10. California Residents - CCPA / CPRA</h2>
        <p>
          If you are a California resident, you have additional rights under
          the California Consumer Privacy Act (CCPA), as amended by the
          California Privacy Rights Act (CPRA):
        </p>
        <ul>
          <li>
            <strong>Right to Know:</strong> You have the right to request that
            we disclose the categories and specific pieces of personal
            information we have collected about you, the categories of sources
            from which the information was collected, the business purpose for
            collecting the information, and the categories of third parties
            with whom we share the information.
          </li>
          <li>
            <strong>Right to Delete:</strong> You have the right to request
            that we delete your personal information, subject to certain
            exceptions.
          </li>
          <li>
            <strong>Right to Correct:</strong> You have the right to request
            that we correct inaccurate personal information.
          </li>
          <li>
            <strong>Right to Opt Out of Sale or Sharing:</strong> We do not
            sell your personal information. We do not share your personal
            information for cross-context behavioral advertising purposes.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> We will not
            discriminate against you for exercising any of your CCPA rights.
          </li>
        </ul>
        <p>
          To exercise your rights under the CCPA, please contact us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
          . We will verify your identity before processing your request and
          respond within 45 days.
        </p>
        <p>
          <strong>Categories of Personal Information Collected:</strong> In the
          preceding 12 months, we have collected the following categories of
          personal information: identifiers (email address, device identifiers),
          internet or other electronic network activity information (usage data,
          watch history), and inferences drawn from the above (language
          proficiency level, learning preferences).
        </p>

        <h2>11. International Data Transfers</h2>
        <p>
          Lingdow is based in China. Your information may be transferred to,
          stored, and processed in countries other than your country of
          residence, including China, the United States, and other countries
          where our service providers operate. These countries may have data
          protection laws that differ from those in your jurisdiction.
        </p>
        <p>
          When we transfer personal data internationally, we take appropriate
          safeguards to ensure that your information receives an adequate level
          of protection, including:
        </p>
        <ul>
          <li>Using service providers that comply with applicable data protection frameworks</li>
          <li>Implementing contractual safeguards such as standard contractual clauses</li>
          <li>Ensuring technical security measures are in place for all data transfers</li>
        </ul>
        <p>
          By using the Service, you acknowledge and consent to the transfer of
          your information to countries outside your country of residence.
        </p>

        <h2>12. Cookies and Tracking Technologies</h2>
        <p>
          The Lingdow mobile app does not use browser cookies. However, we may
          use the following technologies:
        </p>
        <ul>
          <li>
            <strong>Device Identifiers:</strong> We use Apple&apos;s Identifier
            for Vendors (IDFV) to identify your device for analytics and
            account security purposes. We do not use the Advertising Identifier
            (IDFA) and do not track you across other apps or websites.
          </li>
          <li>
            <strong>Local Storage:</strong> We store your preferences, cached
            content, and authentication tokens locally on your device to
            improve app performance and user experience.
          </li>
          <li>
            <strong>Analytics:</strong> We may collect anonymized, aggregated
            usage statistics to understand how the Service is used and to
            improve it. This data cannot be used to identify you personally.
          </li>
        </ul>
        <p>
          We do not participate in ad networks. We do not use tracking
          technologies for targeted advertising. We do not display
          advertisements in the app.
        </p>

        <h2>13. Children&apos;s Privacy</h2>
        <p>
          The Service is not directed to children under the age of 13 (or the
          applicable age of consent in your jurisdiction, such as 16 in the
          European Economic Area). We do not knowingly collect personal
          information from children under these ages. If you are a parent or
          guardian and believe that your child has provided us with personal
          information, please contact us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
          . If we discover that we have inadvertently collected personal
          information from a child under the applicable age of consent, we will
          take steps to delete that information as promptly as possible.
        </p>
        <p>
          In compliance with the Children&apos;s Online Privacy Protection Act
          (COPPA), we do not knowingly collect, use, or disclose personal
          information from children under 13 residing in the United States.
        </p>

        <h2>14. Do Not Track Signals</h2>
        <p>
          Some web browsers transmit &quot;Do Not Track&quot; (DNT) signals. As
          the Lingdow Service is a mobile application and does not track users
          across third-party websites, DNT signals are not applicable. We do
          not track our users across third-party websites or apps for
          advertising purposes.
        </p>

        <h2>15. Third-Party Links</h2>
        <p>
          The Service may contain links to third-party websites or services,
          such as YouTube videos. We are not responsible for the privacy
          practices or content of these third-party services. We encourage you
          to review the privacy policies of any third-party services you access
          through the Service.
        </p>

        <h2>16. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technologies, legal requirements, or other
          factors. We will notify you of any material changes by:
        </p>
        <ul>
          <li>Posting the updated policy within the app</li>
          <li>Updating the &quot;Last updated&quot; date at the top of this policy</li>
          <li>Sending you an email notification for significant changes</li>
        </ul>
        <p>
          Your continued use of the Service after the effective date of any
          changes constitutes your acceptance of the updated policy. If you do
          not agree with the revised policy, you should discontinue use of the
          Service and delete your account.
        </p>

        <h2>17. Data Breach Notification</h2>
        <p>
          In the event of a data breach that is likely to result in a risk to
          your rights and freedoms, we will notify you without undue delay via
          email or prominent notice within the app. We will also notify
          relevant supervisory authorities as required by applicable law.
        </p>

        <h2>18. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Lingdow</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>
        </p>
        <p>
          For data protection inquiries, account deletion requests, or to
          exercise your privacy rights, please email us at{" "}
          <a
            href="mailto:help@lingdow.cn"
            className="text-purple-400 hover:text-purple-300"
          >
            help@lingdow.cn
          </a>{" "}
          with the subject line &quot;Privacy Request&quot;. We will respond to
          all legitimate requests within 30 days.
        </p>
      </article>
    </div>
  );
}

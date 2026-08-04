import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { PolicyContent } from "@/components/legal/PolicyContent";

export const metadata = {
  title: "Privacy Policy | RNS Technology Pte. Ltd.",
  description: "Privacy Policy for RNS Technology Pte. Ltd. Learn how we collect, use, store, and protect your personal data in compliance with Singapore's Personal Data Protection Act (PDPA).",
  alternates: {
    canonical: "https://rnstechnologysg.com/privacy",
  },
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "company-info", title: "2. Company Information" },
  { id: "scope", title: "3. Scope" },
  { id: "information-collected", title: "4. Information We Collect" },
  { id: "how-we-use", title: "5. How We Use Information" },
  { id: "cookies", title: "6. Cookies" },
  { id: "analytics", title: "7. Analytics" },
  { id: "contact-forms", title: "8. Contact Forms" },
  { id: "recruitment", title: "9. Recruitment" },
  { id: "file-uploads", title: "10. File Uploads" },
  { id: "sharing-information", title: "11. Sharing Information" },
  { id: "international-transfers", title: "12. International Transfers" },
  { id: "data-retention", title: "13. Data Retention" },
  { id: "security", title: "14. Security" },
  { id: "user-rights", title: "15. User Rights" },
  { id: "third-party-services", title: "16. Third-Party Services" },
  { id: "external-links", title: "17. External Links" },
  { id: "childrens-privacy", title: "18. Children's Privacy" },
  { id: "policy-changes", title: "19. Changes to this Policy" },
  { id: "contact-us", title: "20. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar theme="light" />
      
      <main className="min-h-screen bg-[#FAFAF9] pt-36 pb-24 font-sans text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          
          {/* Header Banner */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wider">
                <Icon icon="hugeicons:security-check" className="w-4 h-4" />
                Legal & Governance
              </span>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span>Effective Date: <strong>August 5, 2026</strong></span>
                <span>•</span>
                <span>Last Updated: <strong>August 5, 2026</strong></span>
                <span>•</span>
                <span>Version: <strong>1.0.0</strong></span>
              </div>
            </div>
            
            <h1 className="font-rounded font-bold text-4xl sm:text-5xl text-[#161616] tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              This Privacy Policy describes how <strong>RNS Technology Pte. Ltd.</strong> collects, uses, discloses, and protects your personal data in accordance with the Singapore Personal Data Protection Act (PDPA) and international best practices.
            </p>
          </div>

          {/* Interactive Sticky Layout */}
          <PolicyContent sections={sections}>
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                1. Introduction
              </h2>
              <p>
                At <strong>RNS Technology Pte. Ltd.</strong> (&ldquo;RNS Technology,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy and are deeply committed to safeguarding the personal data you entrust to us.
              </p>
              <p>
                This Privacy Policy sets out the basis on which any personal information we collect from you, or that you provide to us through our website, contact portals, or business interactions, will be processed, stored, and protected. We operate strictly in accordance with Singapore&apos;s <strong>Personal Data Protection Act 2012 (PDPA)</strong> and apply GDPR-aligned principles where applicable for global commercial operations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="company-info" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                2. Company Information
              </h2>
              <p>
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2 text-sm">
                <p className="font-bold text-slate-900">RNS Technology Pte. Ltd.</p>
                <p><strong>Registered Office:</strong> 18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre, Singapore 415978</p>
                <p><strong>Country of Incorporation:</strong> Republic of Singapore</p>
                <p><strong>Email Enquiries:</strong> <a href="mailto:enquiry@rnstechnologysg.com" className="text-blue-600 hover:underline">enquiry@rnstechnologysg.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+6593412340" className="text-blue-600 hover:underline">+65 9341 2340</a></p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="scope" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                3. Scope
              </h2>
              <p>
                This Privacy Policy applies to all data subjects who interact with RNS Technology through digital or direct business channels, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visitors and users of our official website</li>
                <li>Individuals submitting business enquiries or requests for quotes (RFQs)</li>
                <li>Existing and prospective corporate clients, vendors, and business partners</li>
                <li>Job applicants submitting resumes or employment applications</li>
                <li>Subscribers to our technical updates, company profiles, or newsletters</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="information-collected" className="scroll-mt-36 space-y-6">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                4. Information We Collect
              </h2>
              <p>
                Depending on how you interact with our website or services, we collect several categories of information:
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900">A. Business Information</h3>
                <p>Company Name, Registered Business Address, Industry Sector, Business Email, and Business Phone Number.</p>
                
                <h3 className="font-bold text-lg text-slate-900">B. Personal Contact Information</h3>
                <p>Full Name, Professional Email Address, Mobile/Office Phone Number, and Job Title/Department.</p>
                
                <h3 className="font-bold text-lg text-slate-900">C. Project & Engineering Requirements</h3>
                <p>Project Specifications, Scope of Work, Workforce Deployment Numbers, Target Timelines, Budget Guidelines (if voluntarily provided), and Uploaded Tender/RFQ Documents.</p>
                
                <h3 className="font-bold text-lg text-slate-900">D. Automatically Collected Technical Information</h3>
                <p>Internet Protocol (IP) address, Browser type and version, Operating System, Device specifications, Time Zone settings, Referral URLs, and Page Interaction Data collected via cookies.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="how-we-use" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                5. How We Use Information
              </h2>
              <p>
                RNS Technology processes personal data solely for legitimate business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to project enquiries, consultation requests, and service submissions</li>
                <li>Preparing commercial proposals, quotations, and manpower supply contracts</li>
                <li>Fulfilling contracted engineering, workforce, and technical support operations</li>
                <li>Managing client relationships and providing ongoing customer support</li>
                <li>Processing job applications, resumes, and workforce recruitment screenings</li>
                <li>Improving website performance, security, and user experience</li>
                <li>Complying with statutory, regulatory, and legal obligations in Singapore</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                6. Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device when you visit our website. They help us provide a seamless experience, analyze web traffic, and remember user preferences.
              </p>
              <p>We utilize the following cookie types:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for core site functionality, navigation, and secure access.</li>
                <li><strong>Analytics Cookies:</strong> Help us measure visitor volume, popular pages, and navigation flow in aggregated form.</li>
                <li><strong>Performance Cookies:</strong> Optimize page load times and website responsiveness.</li>
                <li><strong>Preference Cookies:</strong> Remember UI settings such as theme options or consent choices.</li>
              </ul>
              <p>You can manage or disable cookies at any time through your internet browser settings.</p>
            </section>

            {/* Section 7 */}
            <section id="analytics" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                7. Analytics
              </h2>
              <p>
                We utilize enterprise analytics tools—such as <strong>Google Analytics</strong> and <strong>Microsoft Clarity</strong>—to better understand website traffic patterns and improve performance.
              </p>
              <p>
                All analytics data is collected in anonymized or aggregated formats. These tools do not capture unencrypted personal identification data or store sensitive financial details.
              </p>
            </section>

            {/* Section 8 */}
            <section id="contact-forms" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                8. Contact Forms & Pop-Ups
              </h2>
              <p>
                Information submitted through our site-wide contact pop-ups or consultation forms (such as Company Name, Contact Person, Email, and Phone Number) is transmitted securely and used exclusively to communicate with you regarding your direct enquiry.
              </p>
            </section>

            {/* Section 9 */}
            <section id="recruitment" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                9. Recruitment Data
              </h2>
              <p>
                Resumes, CVs, certificates, and job application forms submitted to RNS Technology are evaluated strictly for talent acquisition and recruitment screening.
              </p>
              <p>
                Unsuccessful applications may be retained securely in our talent database for up to twelve (12) months for future project opportunities unless the candidate requests deletion earlier.
              </p>
            </section>

            {/* Section 10 */}
            <section id="file-uploads" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                10. File Uploads & Confidential Documents
              </h2>
              <p>
                Any documents uploaded to our systems—including Company Profiles, RFQs, Tender Specifications, or Resumes—are stored in encrypted infrastructure and restricted strictly to authorized RNS Technology personnel on a need-to-know basis.
              </p>
            </section>

            {/* Section 11 */}
            <section id="sharing-information" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                11. Sharing of Information
              </h2>
              <p className="font-semibold text-slate-900">
                RNS Technology does NOT sell, rent, trade, or commercialize your personal data under any circumstances.
              </p>
              <p>We may share information only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Professional Advisors:</strong> Auditors, legal counsel, and compliance consultants bound by strict confidentiality obligations.</li>
                <li><strong>Statutory & Government Authorities:</strong> When required by Singapore law, court orders, or Ministry of Manpower (MOM) regulations.</li>
                <li><strong>Infrastructure Providers:</strong> Trusted cloud hosting, security, and IT service vendors operating under data protection agreements.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="international-transfers" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                12. International Data Transfers
              </h2>
              <p>
                Where personal data is transferred or processed outside of Singapore (e.g., using global cloud database infrastructure), we take all reasonable steps to ensure the receiving party provides a standard of protection comparable to Singapore&apos;s PDPA.
              </p>
            </section>

            {/* Section 13 */}
            <section id="data-retention" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                13. Data Retention
              </h2>
              <p>
                Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, or as required for statutory, accounting, legal, or audit requirements under Singapore law.
              </p>
            </section>

            {/* Section 14 */}
            <section id="security" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                14. Security Safeguards
              </h2>
              <p>
                We implement robust technical and organizational security measures to prevent unauthorized access, disclosure, alteration, or destruction of personal data. These controls include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS cryptographic encryption for data in transit</li>
                <li>Role-based access controls and multi-factor authentication</li>
                <li>Secure cloud hosting infrastructure and firewall monitoring</li>
                <li>Regular security audits and internal data handling protocols</li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                Note: While we adhere to strict industry safeguards, no digital storage mechanism or internet transmission can be guaranteed to be 100% immune from security threats.
              </p>
            </section>

            {/* Section 15 */}
            <section id="user-rights" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                15. Your Rights Under PDPA
              </h2>
              <p>Subject to verification and statutory exceptions, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request details of personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where consent was the legal basis.</li>
                <li><strong>Erasure:</strong> Request deletion of data where legally permissible and no longer required for business operations.</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section id="third-party-services" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                16. Third-Party Integrations
              </h2>
              <p>
                Our digital platforms may incorporate embedded tools or integrations (e.g., Google Maps, Google Analytics, Microsoft Clarity, LinkedIn, Facebook, WhatsApp, or cloud servers). Each third-party service operates under its own independent privacy policies.
              </p>
            </section>

            {/* Section 17 */}
            <section id="external-links" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                17. External Links
              </h2>
              <p>
                Our website may contain links to external third-party sites. RNS Technology is not responsible for the privacy practices, content, or security posture of external websites.
              </p>
            </section>

            {/* Section 18 */}
            <section id="childrens-privacy" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                18. Children&apos;s Privacy
              </h2>
              <p>
                Our website and engineering services are strictly intended for enterprise B2B and commercial users over 18 years of age. We do not knowingly solicit or collect data from children under 13.
              </p>
            </section>

            {/* Section 19 */}
            <section id="policy-changes" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                19. Changes to this Policy
              </h2>
              <p>
                RNS Technology reserves the right to update this Privacy Policy periodically to reflect operational changes or statutory updates in Singapore law. Revised policies become effective immediately upon posting to this URL.
              </p>
            </section>

            {/* Section 20 */}
            <section id="contact-us" className="scroll-mt-36 space-y-4 bg-blue-50/60 p-8 rounded-3xl border border-blue-100">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-blue-200/80">
                20. Contact Data Protection Officer (DPO)
              </h2>
              <p>
                If you wish to exercise your rights, submit a data protection inquiry, or ask questions regarding this policy, please contact our Data Protection Officer:
              </p>
              <div className="space-y-1 text-sm font-medium text-slate-900 pt-2">
                <p className="font-bold">Data Protection Officer</p>
                <p>RNS Technology Pte. Ltd.</p>
                <p className="text-slate-600">18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre, Singapore 415978</p>
                <p>Email: <a href="mailto:enquiry@rnstechnologysg.com" className="text-blue-600 underline">enquiry@rnstechnologysg.com</a></p>
                <p>Phone: <a href="tel:+6593412340" className="text-blue-600 underline">+65 9341 2340</a></p>
              </div>
            </section>
          </PolicyContent>

        </div>
      </main>

      <Footer />
    </>
  );
}

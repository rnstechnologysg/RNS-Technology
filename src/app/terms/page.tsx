import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PolicyContent } from "@/components/legal/PolicyContent";

export const metadata = {
  title: "Terms of Use | RNS Technology Pte. Ltd.",
  description: "Terms of Use for RNS Technology Pte. Ltd. Read our terms governing website use, intellectual property, workforce & engineering consultation, downloadable resources, and Singapore law jurisdiction.",
  alternates: {
    canonical: "https://rnstechnologysg.com/terms",
  },
};

const termsSections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "company-info", title: "2. Company Information" },
  { id: "website-purpose", title: "3. Website Purpose" },
  { id: "intellectual-property", title: "4. Intellectual Property" },
  { id: "permitted-use", title: "5. Permitted Use" },
  { id: "accuracy-of-information", title: "6. Accuracy of Information" },
  { id: "service-availability", title: "7. Service Availability" },
  { id: "project-enquiries", title: "8. Project Enquiries" },
  { id: "careers", title: "9. Careers & Applications" },
  { id: "downloads", title: "10. Downloadable Resources" },
  { id: "third-party-websites", title: "11. Third-Party Links" },
  { id: "limitation-of-liability", title: "12. Limitation of Liability" },
  { id: "indemnity", title: "13. Indemnity" },
  { id: "privacy", title: "14. Privacy" },
  { id: "cookies", title: "15. Cookies" },
  { id: "security", title: "16. Security" },
  { id: "governing-law", title: "17. Governing Law" },
  { id: "changes-to-terms", title: "18. Changes to These Terms" },
  { id: "contact-information", title: "19. Contact Information" },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#FAFAF9] pt-36 pb-24 font-sans text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          
          {/* Header Banner */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wider">
                <Icon icon="hugeicons:file-02" className="w-4 h-4" />
                Legal Terms & Agreements
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
              Terms of Use
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              These Terms of Use govern your access to and use of the official website of <strong>RNS Technology Pte. Ltd.</strong> Please read them carefully before utilizing our website, downloading resources, or submitting business enquiries.
            </p>
          </div>

          {/* Interactive Sticky Layout */}
          <PolicyContent sections={termsSections}>
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using the website of <strong>RNS Technology Pte. Ltd.</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;RNS Technology&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
              <p>
                If you do not agree to these terms in their entirety, you must immediately discontinue your use of this website.
              </p>
            </section>

            {/* Section 2 */}
            <section id="company-info" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                2. Company Information
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2 text-sm">
                <p className="font-bold text-slate-900">RNS Technology Pte. Ltd.</p>
                <p><strong>Registered Office:</strong> 18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre, Singapore 415978</p>
                <p><strong>Jurisdiction:</strong> Republic of Singapore</p>
                <p><strong>General Enquiries:</strong> <a href="mailto:enquiry@rnstechnologysg.com" className="text-blue-600 hover:underline">enquiry@rnstechnologysg.com</a></p>
                <p><strong>Direct Line:</strong> <a href="tel:+6593412340" className="text-blue-600 hover:underline">+65 9341 2340</a></p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="website-purpose" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                3. Website Purpose
              </h2>
              <p>
                This website is provided to present general information regarding RNS Technology&apos;s corporate capabilities, workforce solutions, engineering technical support, railway project support, and industry insights.
              </p>
              <p>Specifically, the website serves to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Present company information, engineering disciplines, and ISO certifications</li>
                <li>Showcase workforce deployment and technical support solutions</li>
                <li>Publish industry insights, technical articles, and project news</li>
                <li>Facilitate commercial enquiries and consultation requests</li>
                <li>Provide downloadable corporate documents and capability profiles</li>
                <li>Support recruitment screenings and talent acquisition activities</li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                All information presented on this website is provided for general informational purposes only and does not constitute formal legal, engineering, or binding contractual advice.
              </p>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                4. Intellectual Property Rights
              </h2>
              <p>
                Unless explicitly stated otherwise, all content, materials, assets, and source code displayed on this website are the exclusive intellectual property of RNS Technology Pte. Ltd. or its licensors. Protected assets include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Company brand identity, official logos, slogans, and trademarks</li>
                <li>Website layout design, custom typography, color schemes, and UI elements</li>
                <li>Graphics, icons, photographs, project images, and video demonstrations</li>
                <li>Downloadable PDF documents, brochures, Company Profiles, and Capability Statements</li>
                <li>Original text, blog articles, case studies, and engineering descriptions</li>
                <li>Underlying source code, scripts, software, and dynamic web modules</li>
              </ul>
              <p className="font-semibold text-slate-900">Prohibited Actions:</p>
              <p>
                You may not copy, reproduce, modify, republish, upload, post, transmit, sell, license, distribute, create derivative works from, or reverse engineer any material from this website without prior express written consent from RNS Technology.
              </p>
            </section>

            {/* Section 5 */}
            <section id="permitted-use" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                5. Permitted & Prohibited Use
              </h2>
              <p><strong>Permitted Actions:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browsing website pages for commercial evaluation or informational research</li>
                <li>Downloading publicly provided brochures for internal corporate evaluation</li>
                <li>Submitting project enquiries or job applications via authorized website channels</li>
                <li>Sharing direct URL links to our public website pages</li>
              </ul>
              <p><strong>Prohibited Actions:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempting unauthorized access to website server infrastructure or databases</li>
                <li>Disrupting website performance, imposing excessive server load, or executing denial-of-service attacks</li>
                <li>Uploading viruses, malware, trojans, or malicious scripts</li>
                <li>Scraping, harvesting, or extracting content via automated bots, crawlers, or scripts without permission</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="accuracy-of-information" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                6. Accuracy of Information
              </h2>
              <p>
                While RNS Technology makes reasonable efforts to ensure that website content is accurate, current, and error-free, we make no express or implied warranties regarding the absolute completeness, accuracy, or timeliness of any content.
              </p>
              <p>
                Website content, technical specifications, and service descriptions may be updated, amended, or revised at any time without prior notification.
              </p>
            </section>

            {/* Section 7 */}
            <section id="service-availability" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                7. Service Availability & Modification
              </h2>
              <p>
                RNS Technology reserves the right to modify, suspend, restrict, or discontinue any aspect, feature, page, downloadable document, or service on this website at any time without notice or liability.
              </p>
            </section>

            {/* Section 8 */}
            <section id="project-enquiries" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                8. Project Enquiries & Non-Binding Nature
              </h2>
              <p>
                Submitting a project enquiry, quote request, or consultation pop-up message through this website does <strong>not</strong> constitute a binding commercial agreement, manpower contract, or service commitment.
              </p>
              <p>
                Formal commercial arrangements are only created when a formal written contract or purchase order is explicitly executed and signed by authorized representatives of both parties.
              </p>
            </section>

            {/* Section 9 */}
            <section id="careers" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                9. Careers & Job Applications
              </h2>
              <p>
                Submitting a job application or uploading a resume does not guarantee an interview, employment offer, or candidate placement.
              </p>
              <p>
                RNS Technology evaluates applications based on operational workforce needs. Only shortlisted candidates will be contacted by our HR department.
              </p>
            </section>

            {/* Section 10 */}
            <section id="downloads" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                10. Downloadable Corporate Resources
              </h2>
              <p>
                Downloadable materials—including our Company Profile, capability statements, brochures, and ISO certificates—are provided solely for individual evaluation of RNS Technology&apos;s corporate services.
              </p>
              <p>
                You may not alter, edit, rebrand, or commercially redistribute downloadable materials without written authorization.
              </p>
            </section>

            {/* Section 11 */}
            <section id="third-party-websites" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                11. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party sites or external resources (e.g., social media networks, map services). These links are provided solely for convenience.
              </p>
              <p>
                RNS Technology does not endorse, control, or accept responsibility for the content, privacy practices, availability, or accuracy of third-party websites.
              </p>
            </section>

            {/* Section 12 */}
            <section id="limitation-of-liability" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                12. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted under applicable Singapore law, RNS Technology Pte. Ltd., its directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or related to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of, or inability to access or use, this website</li>
                <li>Any reliance placed on information, articles, or downloadable files on this website</li>
                <li>Errors, omissions, website downtime, or technical interruptions</li>
                <li>Loss of profits, revenue, data, business opportunities, or goodwill</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="indemnity" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                13. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless RNS Technology Pte. Ltd. from and against any claims, liabilities, losses, damages, expenses, or legal fees resulting from your misuse of the website, violation of these Terms of Use, or infringement of third-party rights.
              </p>
            </section>

            {/* Section 14 */}
            <section id="privacy" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                14. Privacy Policy Integration
              </h2>
              <p>
                Our collection, use, and protection of your personal information is governed by our dedicated <Link href="/privacy" className="text-blue-600 underline font-semibold">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
            </section>

            {/* Section 15 */}
            <section id="cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                15. Cookies & Tracking
              </h2>
              <p>
                We utilize essential and analytics cookies to optimize site performance and user experience. Please refer to Section 6 of our Privacy Policy for full details on cookie handling.
              </p>
            </section>

            {/* Section 16 */}
            <section id="security" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                16. Digital Security
              </h2>
              <p>
                While RNS Technology employs SSL encryption, security monitoring, and secure server hosting, no web system is immune to security vulnerabilities. You are responsible for configuring your own device security and virus protection when accessing the internet.
              </p>
            </section>

            {/* Section 17 */}
            <section id="governing-law" className="scroll-mt-36 space-y-4 bg-blue-50/60 p-8 rounded-3xl border border-blue-100">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-blue-200/80">
                17. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms of Use and all matters arising out of or related to your use of this website shall be governed by, construed, and enforced in accordance with the laws of the <strong>Republic of Singapore</strong>.
              </p>
              <p>
                Any dispute, controversy, or claim arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the Courts of the Republic of Singapore.
              </p>
            </section>

            {/* Section 18 */}
            <section id="changes-to-terms" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                18. Changes to These Terms
              </h2>
              <p>
                RNS Technology reserves the right to modify these Terms of Use at any time without prior individual notice. Your continued use of the website following any modifications constitutes your acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 19 */}
            <section id="contact-information" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                19. Contact Information
              </h2>
              <p>
                For questions, formal notices, or legal enquiries regarding these Terms of Use, please contact:
              </p>
              <div className="space-y-1 text-sm font-medium text-slate-900 pt-2">
                <p className="font-bold">Legal & Corporate Affairs</p>
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

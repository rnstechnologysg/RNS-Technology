import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PolicyContent } from "@/components/legal/PolicyContent";

export const metadata = {
  title: "Cookie Policy | RNS Technology Pte. Ltd.",
  description: "Cookie Policy for RNS Technology Pte. Ltd. Learn about the cookies and tracking technologies we use on our website, how to manage your preferences, and compliance with Singapore PDPA.",
  alternates: {
    canonical: "https://rnstechnologysg.com/cookies",
  },
};

const cookieSections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "what-are-cookies", title: "2. What Are Cookies?" },
  { id: "types-of-cookies", title: "3. Types of Cookies We Use" },
  { id: "third-party-cookies", title: "4. Third-Party Cookies" },
  { id: "why-we-use-cookies", title: "5. Why We Use Cookies" },
  { id: "managing-cookies", title: "6. Managing Cookies" },
  { id: "cookie-consent", title: "7. Cookie Consent" },
  { id: "data-protection", title: "8. Data Protection" },
  { id: "policy-changes", title: "9. Policy Changes" },
  { id: "contact-us", title: "10. Contact Us" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#FAFAF9] pt-36 pb-24 font-sans text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          
          {/* Header Banner */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wider">
                <Icon icon="hugeicons:cookie" className="w-4 h-4" />
                Cookie Policy & Tracking
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
              Cookie Policy
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              This Cookie Policy explains how <strong>RNS Technology Pte. Ltd.</strong> uses cookies and similar digital technologies to recognize you when you visit our website, optimize page performance, and enhance user experience.
            </p>
          </div>

          {/* Interactive Sticky Layout */}
          <PolicyContent sections={cookieSections}>
            
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                1. Introduction
              </h2>
              <p>
                This Cookie Policy describes how <strong>RNS Technology Pte. Ltd.</strong> (&ldquo;RNS Technology,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies, web beacons, and similar tracking technologies across our corporate website and digital portals.
              </p>
              <p>
                By continuing to browse or use our website, you consent to our use of cookies in accordance with this policy and Singapore&apos;s <strong>Personal Data Protection Act (PDPA)</strong> guidelines.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-are-cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                2. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your computer, tablet, or mobile device by websites you visit. They are widely used to ensure website functionality, improve performance, store user preferences, and provide analytical data to site owners.
              </p>
              <p>
                Cookies generally do not contain personally identifiable information on their own, but information stored in cookies may be linked to personal data we hold about you in accordance with our <Link href="/privacy" className="text-blue-600 underline font-semibold">Privacy Policy</Link>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="types-of-cookies" className="scroll-mt-36 space-y-6">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                3. Types of Cookies We Use
              </h2>
              
              {/* Cookie Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold uppercase tracking-wider">
                      <th className="p-4 border-b border-slate-200">Cookie Type</th>
                      <th className="p-4 border-b border-slate-200">Purpose</th>
                      <th className="p-4 border-b border-slate-200">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Essential</td>
                      <td className="p-4 text-slate-600">Core website functionality, security, form submissions, and cookie preference storage</td>
                      <td className="p-4 text-slate-500">Session / Persistent</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Performance</td>
                      <td className="p-4 text-slate-600">Page load optimization, navigation stability, and error monitoring</td>
                      <td className="p-4 text-slate-500">Persistent</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Analytics</td>
                      <td className="p-4 text-slate-600">Aggregated visitor volume analysis, navigation heatmaps, and traffic sources</td>
                      <td className="p-4 text-slate-500">Persistent</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Functional</td>
                      <td className="p-4 text-slate-600">Remembering user preferences, dark/light theme options, and UI states</td>
                      <td className="p-4 text-slate-500">Persistent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900">A. Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary to provide you with basic services available through our website (e.g., navigating pages, secure form submissions, and maintaining session security). Essential cookies cannot be switched off in our systems without affecting core site operations.
                </p>

                <h3 className="font-bold text-lg text-slate-900">B. Performance Cookies</h3>
                <p>
                  Performance cookies collect information about how visitors interact with our website, such as page load speed and technical error logs. They help us continuously optimize server response times and digital stability.
                </p>

                <h3 className="font-bold text-lg text-slate-900">C. Analytics Cookies</h3>
                <p>
                  Analytics cookies enable us to measure web traffic metrics, visitor volume, referral sources, device types, and popular pages. All data gathered by analytics cookies is aggregated anonymously.
                </p>

                <h3 className="font-bold text-lg text-slate-900">D. Functional Cookies</h3>
                <p>
                  Functional cookies allow our website to remember choices you make (such as language preferences or cookie consent choices) to provide a more personalized experience.
                </p>

                <h3 className="font-bold text-lg text-slate-900">E. Marketing Cookies</h3>
                <p className="text-slate-600 italic">
                  RNS Technology does not currently deploy targeted advertising or third-party behavioral marketing cookies on this website. Should marketing cookies be introduced in the future, users will be informed and provided explicit opt-in preferences where required by law.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="third-party-cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                4. Third-Party Cookies
              </h2>
              <p>
                In addition to our first-party cookies, trusted third-party service providers may place cookies on your device when you interact with integrated components on our site.
              </p>
              <p>Our integrated third-party providers include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Web traffic and demographic measurement</li>
                <li><strong>Microsoft Clarity:</strong> Session navigation heatmaps and user flow analysis</li>
                <li><strong>Google Maps:</strong> Interactive office location mapping</li>
                <li><strong>LinkedIn, Facebook & WhatsApp:</strong> Social media sharing and direct communication links</li>
              </ul>
              <p className="text-xs text-slate-500">
                Each third-party service provider operates under its own independent privacy and cookie policies.
              </p>
            </section>

            {/* Section 5 */}
            <section id="why-we-use-cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                5. Why We Use Cookies
              </h2>
              <p>We use cookies and digital tracking technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure seamless website navigation and security</li>
                <li>Remember your UI preferences and form inputs</li>
                <li>Analyze visitor engagement and popular project categories</li>
                <li>Improve page loading performance and website speed</li>
                <li>Support technical troubleshooting and bug diagnostic efforts</li>
                <li>Maintain a secure commercial enquiry and recruitment portal</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="managing-cookies" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                6. Managing & Disabling Cookies
              </h2>
              <p>
                You have the right to accept, reject, or manage your cookie preferences at any time.
              </p>
              <p>
                Most web browsers allow you to control or block cookies through their system settings. You can consult the instructions for your specific browser below:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
                <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              </ul>
              <p className="text-xs text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-200">
                ⚠️ <strong>Note:</strong> Disabling essential cookies may impair core website functionality, causing certain pages or contact forms to render incorrectly.
              </p>
            </section>

            {/* Section 7 */}
            <section id="cookie-consent" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                7. Cookie Consent Management
              </h2>
              <p>
                Upon your first visit to our website, a cookie banner presents choices allowing you to accept or manage non-essential cookies. You may update your consent choices at any time by clearing your browser cache or updating your browser privacy settings.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-protection" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                8. Data Protection Integration
              </h2>
              <p>
                All personal data collected through cookies is handled strictly in accordance with Singapore&apos;s PDPA regulations and our comprehensive <Link href="/privacy" className="text-blue-600 underline font-semibold">Privacy Policy</Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section id="policy-changes" className="scroll-mt-36 space-y-4">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                9. Changes to This Cookie Policy
              </h2>
              <p>
                RNS Technology reserves the right to amend or update this Cookie Policy at any time. Any changes will be published on this page with an updated &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact-us" className="scroll-mt-36 space-y-4 bg-blue-50/60 p-8 rounded-3xl border border-blue-100">
              <h2 className="font-rounded font-bold text-2xl text-slate-900 pb-2 border-b border-blue-200/80">
                10. Contact Us
              </h2>
              <p>
                For questions or inquiries regarding our Cookie Policy or digital privacy practices, please contact us at:
              </p>
              <div className="space-y-1 text-sm font-medium text-slate-900 pt-2">
                <p className="font-bold">RNS Technology Pte. Ltd.</p>
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

import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-[180px] pb-[60px] px-8 text-center">
        <h1 className="text-[60px] max-md:text-[40px] font-bold text-foreground leading-[1.1]">
          Privacy policy:
        </h1>
        <p className="mt-4 text-[18px] text-body">Effective: 16 April 2026</p>
      </section>

      {/* Content */}
      <section className="pb-[100px] px-8">
        <div className="max-w-[860px] mx-auto bg-surface rounded-xl p-10 max-md:p-6">
          <div className="prose-monad space-y-8">

            <p>Monad Studios Ltd ("Monad Studios", "we", "us", "our") runs the Monad Method and the offers delivered through it: Monad OS, Monad Activations, and Monad LTS. This policy explains what information we collect when you visit monadmethod.com or work with us, why we hold it, and what you can do about it.</p>

            <p>We are the data controller for your personal data. Our registered address is Dudley House, N Wharf Rd, W2 1QZ London, United Kingdom. If you have any questions about anything below, write to <a href="mailto:sidsel@loschenkohl.com" className="text-teal-link hover:underline">sidsel@loschenkohl.com</a>.</p>

            <h2>Who this applies to</h2>
            <p>This policy covers you if you:</p>
            <ul>
              <li>Visit monadmethod.com</li>
              <li>Subscribe to the email list or download a lead magnet</li>
              <li>Book a discovery call</li>
              <li>Enrol in Monad OS, an Activation, or Monad LTS</li>
              <li>Contact us directly</li>
            </ul>

            <h2>What we collect</h2>
            <p><strong>Information you give us</strong></p>
            <ul>
              <li>Name, email, and phone number when you subscribe, enquire, or book a call.</li>
              <li>Business context and background shared during discovery and intake.</li>
              <li>Payment details when you purchase an offer. Payment data is handled by our payment processor. We never see or store your card number.</li>
              <li>Voice notes, written reflections, and session content shared as part of the work.</li>
              <li>Anything you send voluntarily through WhatsApp, email, or on a call.</li>
            </ul>
            <p><strong>Information collected automatically</strong></p>
            <ul>
              <li>Basic device and browser information (IP address, device type, operating system, referring source).</li>
              <li>Cookies and analytics data. We use these to understand how the site is used and to improve it.</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Deliver the work you've signed up for</li>
              <li>Manage your account and send service emails (receipts, scheduling, onboarding)</li>
              <li>Support the work by helping us see patterns in what you share between sessions</li>
              <li>Send you content you've subscribed to</li>
              <li>Improve monadmethod.com and the work over time</li>
              <li>Meet legal, tax, and accounting obligations</li>
            </ul>
            <p>Our lawful bases under UK GDPR are: your consent (for marketing emails), contract (to deliver the offer you've purchased), legitimate interest (to improve the site, prevent fraud, and analyse how people use it), and legal obligation (for tax and compliance).</p>

            <h2>How we handle voice notes and session material</h2>
            <p>The self-inquiry voice notes, written reflections, and session content you share are the most personal part of the work. They are treated as confidential and never shared outside Monad Studios.</p>
            <p>We may use AI-assisted transcription and pattern-analysis tools to help surface themes across your own responses over time. These tools operate under confidentiality agreements and do not use your content to train public models. If you do not want your material processed in this way, tell us and we will exclude you.</p>

            <h2>Who we share your data with</h2>
            <p>We only share what is necessary to deliver the work or run the business. That includes:</p>
            <ul>
              <li><strong>Payment processor</strong> (Stripe) to process your payments.</li>
              <li><strong>Website and hosting</strong> (Lovable, domain registrar) to run monadmethod.com.</li>
              <li><strong>Email provider</strong> to send service and marketing emails.</li>
              <li><strong>Scheduling tool</strong> to manage sessions.</li>
              <li><strong>Voice-note and transcription tools</strong> to process the material you send in.</li>
              <li><strong>AI tools</strong> for pattern analysis, under enterprise terms that exclude training.</li>
              <li><strong>Accountants and legal advisors</strong> where required by law.</li>
            </ul>
            <p>We do not sell your data. We do not rent it. We do not share it for other companies' marketing.</p>

            <h2>International transfers</h2>
            <p>Some of the tools we use sit outside the UK. Where that happens, we use transfer mechanisms recognised under UK GDPR, including standard contractual clauses, to keep your data protected.</p>

            <h2>Cookies and analytics</h2>
            <p>The site uses cookies to remember your preferences and measure how the site performs. You can clear or block cookies through your browser settings. Blocking them may affect how parts of the site work.</p>

            <h2>How long we keep your information</h2>
            <p>We keep your data as long as we need it for the purpose we collected it, plus any period required by law (for example, seven years for financial records in the UK).</p>
            <p>If you stop engaging with the work, we keep:</p>
            <ul>
              <li>The minimum required for tax and accounting (seven years)</li>
              <li>Any content you created inside the work (voice notes, session reflections) for up to two years, then delete, unless you ask for earlier deletion</li>
            </ul>

            <h2>Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the data we hold on you</li>
              <li>Correct inaccurate data</li>
              <li>Ask us to delete your data, subject to legal retention rules</li>
              <li>Restrict or object to how we process your data</li>
              <li>Port your data to another service</li>
              <li>Withdraw consent for marketing at any time</li>
              <li>Complain to the Information Commissioner's Office (ICO) if you believe we have handled your data wrongly</li>
            </ul>
            <p>To exercise any of these rights, email <a href="mailto:sidsel@loschenkohl.com" className="text-teal-link hover:underline">sidsel@loschenkohl.com</a>. We respond within 30 days.</p>

            <h2>Security</h2>
            <p>We take reasonable technical and organisational steps to protect your data. No system is perfectly secure, but we work with trusted providers and keep access limited.</p>

            <h2>Children</h2>
            <p>Monad Studios offers are for adults. If we learn we have collected data from anyone under 18, we delete it.</p>

            <h2>External links</h2>
            <p>The site may link to other platforms (Instagram, LinkedIn, Substack, and others). Those platforms have their own privacy policies. We are not responsible for what happens on their side.</p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. The current version will always be on this page with its effective date.</p>

            <h2>Contact</h2>
            <p>
              Questions about how we handle your data:<br />
              <br />
              Monad Studios Ltd<br />
              Dudley House, N Wharf Rd<br />
              W2 1QZ London, United Kingdom<br />
              <a href="mailto:sidsel@loschenkohl.com" className="text-teal-link hover:underline">sidsel@loschenkohl.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

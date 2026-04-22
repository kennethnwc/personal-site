import Link from "next/link";
import { MyHeading } from "../../components/switch-deal/Heading";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <section className="retro-window overflow-hidden">
          <div className="retro-titlebar">privacy.txt</div>
          <div className="space-y-4 p-5 text-sm leading-7 text-slate-700 sm:p-8 sm:text-base">
            <p className="retro-kicker">switch-deal app policy</p>
            <h1 className="font-display text-2xl leading-tight text-slate-900 sm:text-3xl">
              Privacy Policy
            </h1>

            <p>
              Ng Wing Chung built the Switch Deal app as a free app. This
              service is provided at no cost and is intended for use as is. This
              page is used to inform visitors regarding policies with the
              collection, use, and disclosure of personal information if anyone
              decided to use the service.
            </p>
            <p>
              If you choose to use this service, then you agree to the
              collection and use of information in relation to this policy. The
              personal information that may be collected is used for providing
              and improving the service and will not be used or shared except as
              described in this privacy policy.
            </p>

            <MyHeading>Information Collection and Use</MyHeading>
            <p>
              For a better experience while using the service, certain
              personally identifiable information may be requested. The
              information requested will be retained on your device and is not
              collected directly by the developer in any other way.
            </p>
            <p>
              The app may use third-party services that collect information used
              to identify you. You can review Google Play Services&apos; privacy
              policy at{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 underline decoration-sky-300"
              >
                google.com/policies/privacy
              </a>
              .
            </p>

            <MyHeading>Log Data</MyHeading>
            <p>
              Whenever you use the service, in the case of an error in the app,
              data and information may be collected through third-party products
              on your phone called Log Data. This may include your device IP
              address, device name, operating system version, app configuration,
              the time and date of your use of the service, and other
              statistics.
            </p>

            <MyHeading>Cookies</MyHeading>
            <p>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. They are sent to your
              browser from websites that you visit and are stored on your
              device&apos;s internal memory.
            </p>
            <p>
              This service does not use cookies explicitly. However, the app may
              use third-party code and libraries that use cookies to collect
              information and improve their services. You may accept or refuse
              these cookies, but refusing them may limit some portions of the
              service.
            </p>

            <MyHeading>Service Providers</MyHeading>
            <p>
              Third-party companies or individuals may be employed for the
              following reasons:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>To facilitate the service</li>
              <li>To provide the service on behalf of the developer</li>
              <li>To perform service-related services</li>
              <li>To assist in analyzing how the service is used</li>
            </ul>
            <p>
              These third parties may have access to personal information only
              to perform the tasks assigned to them on behalf of the service and
              are obligated not to disclose or use it for any other purpose.
            </p>

            <MyHeading>Security</MyHeading>
            <p>
              Commercially acceptable means are used to protect personal
              information, but no method of transmission over the internet or
              electronic storage is 100% secure and reliable, so absolute
              security cannot be guaranteed.
            </p>

            <MyHeading>Links to Other Sites</MyHeading>
            <p>
              This service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. These
              external sites are not operated by the developer, so reviewing
              their privacy policies is strongly recommended.
            </p>

            <MyHeading>Children&apos;s Privacy</MyHeading>
            <p>
              These services do not address anyone under the age of 13. Personal
              identifiable information is not knowingly collected from children
              under 13 years of age. If such information is discovered, it will
              be deleted promptly from the servers.
            </p>

            <MyHeading>Changes to This Privacy Policy</MyHeading>
            <p>
              This privacy policy may be updated from time to time. You are
              advised to review this page periodically for any changes. This
              policy is effective as of 2021-08-08.
            </p>

            <MyHeading>Contact Us</MyHeading>
            <p>
              If you have any questions or suggestions about this privacy
              policy, contact{" "}
              <a
                href="mailto:s1071229@gmail.com"
                className="text-sky-700 underline decoration-sky-300"
              >
                s1071229@gmail.com
              </a>
              .
            </p>

            <div className="pt-4">
              <Link
                href="/switch-deal"
                className="retro-button retro-button--secondary"
              >
                Back to Switch Deal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

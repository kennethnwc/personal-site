import Link from "next/link";

export default function SwitchDealPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <section className="retro-window overflow-hidden">
          <div className="retro-titlebar">switch-deal.app</div>
          <div className="space-y-4 p-5 sm:p-8">
            <p className="retro-kicker">legacy app page</p>
            <h1 className="font-display text-2xl leading-tight text-slate-900 sm:text-3xl">
              Switch Deal
            </h1>
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Archived landing page for the Switch Deal app. The privacy policy
              remains available here while the main portfolio now lives on the
              redesigned homepage.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/switch-deal/privacy" className="retro-button">
                Privacy Policy
              </Link>
              <Link href="/" className="retro-button retro-button--secondary">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

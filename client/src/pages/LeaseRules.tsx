/*
 * DESIGN: Rugged Americana
 * Lease & Park Rules page
 */
export default function LeaseRules() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h1 className="font-[var(--font-display)] font-black text-white text-4xl md:text-5xl mb-4">
            Lease & <span className="text-[var(--color-amber)]">Park Rules</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Simple guidelines to keep Texoma Lakeside RV Park a great place for everyone.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="container max-w-3xl">
          {/* Lease Info */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5 mb-8">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-[var(--color-amber)] rounded-full" />
              Lease Information
            </h2>
            <div className="space-y-4 text-[var(--color-navy)]/70 leading-relaxed">
              <p>
                Texoma Lakeside RV Park offers monthly, weekly, and daily leasing options. Our primary focus is long-term monthly tenants who want to make the park their home base for enjoying Lake Texoma.
              </p>
              <p>
                To lease a site, simply call or text us at <a href="tel:9723221989" className="text-[var(--color-amber)] font-semibold hover:underline">(972) 322-1989</a> or email <a href="mailto:TexomaLakesideRVPark@gmail.com" className="text-[var(--color-amber)] font-semibold hover:underline">TexomaLakesideRVPark@gmail.com</a>. We'll discuss availability, walk you through the lease terms, and get you set up.
              </p>
              <div className="bg-[var(--color-cream)] rounded-lg p-5 mt-4">
                <h3 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] mb-3">Rate Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">$30</div>
                    <div className="text-sm text-[var(--color-navy)]/60">Daily</div>
                  </div>
                  <div>
                    <div className="font-[var(--font-stat)] text-3xl text-[var(--color-navy)]">$175</div>
                    <div className="text-sm text-[var(--color-navy)]/60">Weekly</div>
                  </div>
                  <div>
                    <div className="font-[var(--font-stat)] text-3xl text-[var(--color-amber)]">$450</div>
                    <div className="text-sm text-[var(--color-navy)]/60">Monthly + Electric</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Park Rules */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-black/5">
            <h2 className="font-[var(--font-display)] font-bold text-[var(--color-navy)] text-2xl mb-6 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-[var(--color-forest)] rounded-full" />
              Park Rules & Guidelines
            </h2>
            <div className="space-y-6 text-[var(--color-navy)]/70 leading-relaxed">
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] mb-2">General Conduct</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Quiet hours are observed from 10:00 PM to 7:00 AM</li>
                  <li>Please be respectful of your neighbors and their space</li>
                  <li>Speed limit within the park is 5 MPH</li>
                  <li>All guests must be registered at the office</li>
                </ul>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] mb-2">Site Maintenance</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Keep your site clean and free of debris</li>
                  <li>All RVs must be in good, maintained condition</li>
                  <li>No permanent structures or additions without approval</li>
                  <li>Properly dispose of all waste in designated areas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] mb-2">Vehicles & Parking</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Park vehicles on your designated site only</li>
                  <li>Boats and trailers must be stored on your site</li>
                  <li>No abandoned or inoperable vehicles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-navy)] mb-2">Utilities</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Electric is metered individually and billed monthly</li>
                  <li>Report any water leaks or utility issues immediately</li>
                  <li>Do not tamper with utility connections or meters</li>
                </ul>
              </div>
              <p className="text-sm text-[var(--color-navy)]/50 italic pt-4 border-t border-black/5">
                These rules are in place to ensure a pleasant experience for all residents. For complete lease terms and conditions, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container text-center">
          <h2 className="font-[var(--font-display)] font-black text-white text-3xl mb-4">
            Ready to Lease a Site?
          </h2>
          <p className="text-white/70 mb-8">
            Call or text us to check availability and get started.
          </p>
          <a
            href="tel:9723221989"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-amber)] text-[var(--color-navy)] font-[var(--font-display)] font-bold rounded-lg hover:bg-[var(--color-amber-light)] transition-all"
          >
            Call (972) 322-1989
          </a>
        </div>
      </section>
    </>
  );
}

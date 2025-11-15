export default function WhyChooseUs() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="max-w-2xl mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
            Why teams choose BrandPulse
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Designed for brand, PR, and CX teams who need calm, reliable monitoring — not noisy dashboards.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">Fast & Real-time</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Mentions appear within seconds, so your team can respond before issues turn into crises.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">AI Powered</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Our models classify sentiment, cluster topics, and surface incidents automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">Zero Setup Required</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Connect your brand names and domains — BrandPulse handles the rest behind the scenes.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

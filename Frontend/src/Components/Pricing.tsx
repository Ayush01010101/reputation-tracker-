const Pricing = () => {
  return (
    <section id="pricing" className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
            Pricing that scales with your brand
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Start free, then upgrade as your monitoring needs grow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Free Plan */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-sm font-semibold tracking-tight text-slate-900">Free</h3>
              <p className="mt-1 text-xs text-slate-600">For individuals exploring brand monitoring.</p>
            </div>

            <div className="mb-4">
              <p className="text-2xl font-semibold tracking-tight text-slate-900">$0</p>
              <p className="text-[11px] text-slate-500 mt-1">Forever free</p>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Basic tracking for 1 brand
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Daily sentiment summaries
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Limited history (7 days)
              </li>
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium tracking-tight text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition">
              Get started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border border-slate-900/10 bg-slate-900 text-slate-50 p-6 flex flex-col shadow-md shadow-slate-900/10">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-slate-50">Pro</h3>
                <p className="mt-1 text-xs text-slate-300">For teams that need live alerts and collaboration.</p>
              </div>

              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-100">
                Most popular
              </span>
            </div>

            <div className="mb-4">
              <p className="text-2xl font-semibold tracking-tight text-slate-50">$49</p>
              <p className="text-[11px] text-slate-300 mt-1">per month, billed annually</p>
            </div>

            <ul className="space-y-2 text-xs text-slate-100 mb-5">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-100"></span>
                Real-time tracking for 3 brands
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-100"></span>
                AI sentiment & topic clustering
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-100"></span>
                Spike alerts via email & Slack
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-100"></span>
                90 days of history
              </li>
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-medium tracking-tight text-slate-900 hover:bg-white transition">
              Start Pro trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-sm font-semibold tracking-tight text-slate-900">Enterprise</h3>
              <p className="mt-1 text-xs text-slate-600">
                For organizations with complex brand portfolios.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-2xl font-semibold tracking-tight text-slate-900">Let’s talk</p>
              <p className="text-[11px] text-slate-500 mt-1">Custom pricing</p>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Unlimited brands & workspaces
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Dedicated SSO & security reviews
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Custom alerts & integrations
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                Priority support & onboarding
              </li>
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium tracking-tight text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition">
              Talk to sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

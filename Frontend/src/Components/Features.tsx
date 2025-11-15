export default function Features() {
  return (
    <section id="features" className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Built for modern brand teams
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Everything you need to monitor, understand, and respond to brand conversations — in one clean dashboard.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Feature 1 */}
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 hover:shadow-md hover:border-slate-200 transition">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 mb-4">
              <svg className="h-4 w-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10l5 5 10-10"></path>
                <path d="M2 20l6-6"></path>
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">Real-Time Mention Tracking</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Monitor Twitter, YouTube, Reddit, blogs, and news in real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 hover:shadow-md hover:border-slate-200 transition">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 mb-4">
              <svg className="h-4 w-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M4.93 4.93 9 9"></path>
                <path d="M15 15l4.07 4.07"></path>
                <path d="M9 15 4.93 19.07"></path>
                <path d="M20.07 4.93 15 10"></path>
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">AI Sentiment Analysis</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Instantly understand whether conversations are positive, negative, or neutral.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 hover:shadow-md hover:border-slate-200 transition">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 mb-4">
              <svg className="h-4 w-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h7v7H3z"></path>
                <path d="M14 3h7v7h-7z"></path>
                <path d="M14 14h7v7h-7z"></path>
                <path d="M3 14h7v7H3z"></path>
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">Topic Clustering</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Automatically group mentions into categories like Delivery, Pricing, Service.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 hover:shadow-md hover:border-slate-200 transition">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 mb-4">
              <svg className="h-4 w-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">Spike Alerts</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Get notified instantly when negative mentions spike unexpectedly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


const DashboardStats = () => {
  return (
    <section id="demo" className="border-t border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              A calm command center for your brand
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              A single, unified dashboard combining sentiment, trends, and live conversations.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 p-4 sm:p-6 lg:p-7">

          {/* Top bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                <span className="text-xs font-semibold tracking-[0.14em] text-slate-900">BP</span>
              </div>
              <div>
                <p className="text-xs-medium text-slate-800">BrandPulse Workspace</p>
                <p className="text-[11px] text-slate-500">Monitoring “Acme Inc” • Global</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Live
              </button>
              <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition">
                Last 24 hours
              </button>
              <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition">
                All channels
              </button>
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-12">

            {/* Left Column */}
            <div className="lg:col-span-8 space-y-4">

              {/* Sentiment + Trend */}
              <div className="grid md:grid-cols-5 gap-4">

                {/* Sentiment Box */}
                <div className="md:col-span-2 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-slate-700">Sentiment</p>
                    <span className="text-[11px] text-slate-500">Today</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center">
                      <div className="absolute inset-1 rounded-full border-[8px] border-emerald-400/80"></div>
                      <div
                        className="absolute inset-2 rounded-full border-[8px] border-amber-300"
                        style={{ clipPath: "polygon(0 0,100% 0,100% 60%,0 60%)" }}
                      ></div>
                      <div
                        className="absolute inset-3 rounded-full border-[8px] border-rose-300"
                        style={{ clipPath: "polygon(0 60%,100% 60%,100% 100%,0 100%)" }}
                      ></div>

                      <div className="relative text-center">
                        <p className="text-xs font-semibold text-slate-900">72%</p>
                        <p className="text-[10px] text-slate-500">Positive</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center text-slate-600">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
                          Positive
                        </span>
                        <span className="text-slate-800 font-medium">72%</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center text-slate-600">
                          <span className="h-2 w-2 rounded-full bg-amber-300 mr-2"></span>
                          Neutral
                        </span>
                        <span className="text-slate-800 font-medium">18%</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center text-slate-600">
                          <span className="h-2 w-2 rounded-full bg-rose-300 mr-2"></span>
                          Negative
                        </span>
                        <span className="text-slate-800 font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trend Box */}
                <div className="md:col-span-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-slate-700">Mention volume</p>
                    <span className="text-[11px] text-emerald-500">+21% vs. yesterday</span>
                  </div>

                  <div className="h-24 relative">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      <div className="border-t border-dashed border-slate-200"></div>
                      <div className="border-t border-dashed border-slate-200"></div>
                      <div className="border-t border-dashed border-slate-200"></div>
                    </div>

                    <div className="absolute inset-x-1 inset-y-2">
                      <svg viewBox="0 0 260 80" className="w-full h-full text-slate-900">
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          points="5,50 35,45 65,35 95,38 125,30 155,40 185,28 215,32 245,20"
                        ></polyline>
                        <circle cx="245" cy="20" r="2.5" fill="currentColor"></circle>
                      </svg>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 flex justify-between text-[10px] text-slate-400">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentions Feed */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-slate-700">Mentions feed</p>

                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-slate-600">
                      All
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-slate-600">
                      Negative
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-slate-600">
                      PR
                    </span>
                  </div>
                </div>

                <div className="space-y-3">

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-slate-800 line-clamp-2">
                        “Our team switched to BrandPulse last month and resolution time for social complaints dropped dramatically.”
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Twitter • @supportlead • 2m ago
                      </p>
                    </div>

                    <div className="ml-2 flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-600 border border-emerald-100">
                        Positive
                      </span>
                      <span className="text-[10px] text-slate-400">Support</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-slate-800">
                        “Seeing consistent delays in shipping updates from Acme. Any plans to fix the tracking issues?”
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">Reddit • r/ecommerce • 14m ago</p>
                    </div>

                    <div className="ml-2 flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[10px] text-rose-600 border border-rose-100">
                        Negative
                      </span>
                      <span className="text-[10px] text-slate-400">Delivery</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-[11px] text-slate-800">
                        “New pricing is reasonable given the depth of sentiment analytics. Curious about roadmap for integrations.”
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">Tech Review Blog • 42m ago</p>
                    </div>

                    <div className="ml-2 flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-600 border border-amber-100">
                        Neutral
                      </span>
                      <span className="text-[10px] text-slate-400">Pricing</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-4">

              {/* AI Insight */}
              <div className="rounded-2xl border border-slate-900/5 bg-slate-900 text-slate-50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-50">AI incident summary</p>
                  <span className="text-[11px] text-slate-400">Last 60 minutes</span>
                </div>

                <p className="text-[11px] text-slate-100 leading-relaxed">
                  Negative sentiment around <span className="font-medium">Delivery</span> is trending{" "}
                  <span className="font-medium">3.4x above baseline</span>, mainly from{" "}
                  <span className="font-medium">UK &amp; DE</span>. Peak conversation is tied to “late dispatch emails”.
                </p>

                <ul className="mt-3 space-y-1.5 text-[11px] text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-slate-100"></span>
                    <span>
                      Average response time to complaints is{" "}
                      <span className="font-medium">18 minutes</span>.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-slate-100"></span>
                    <span>
                      Recommended: pin proactive shipping update post &amp; notify CX leads.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Topics */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-700">Top topics</p>
                  <span className="text-[11px] text-slate-500">Today</span>
                </div>

                <div className="space-y-3 text-[11px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="text-slate-700">Support &amp; response</span>
                    </div>
                    <span className="text-slate-900 font-medium">38%</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-300"></span>
                      <span className="text-slate-700">Pricing &amp; value</span>
                    </div>
                    <span className="text-slate-900 font-medium">24%</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-300"></span>
                      <span className="text-slate-700">Delivery &amp; logistics</span>
                    </div>
                    <span className="text-slate-900 font-medium">21%</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span className="text-slate-700">Product experience</span>
                    </div>
                    <span className="text-slate-900 font-medium">17%</span>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-slate-700">Channels</p>
                  <span className="text-[11px] text-slate-500">Live</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <span className="text-slate-700">Twitter</span>
                    <span className="text-slate-900 font-medium">5,322</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <span className="text-slate-700">Reddit</span>
                    <span className="text-slate-900 font-medium">1,204</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <span className="text-slate-700">News</span>
                    <span className="text-slate-900 font-medium">283</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <span className="text-slate-700">YouTube</span>
                    <span className="text-slate-900 font-medium">147</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardStats;


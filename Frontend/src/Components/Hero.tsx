export default function Hero() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero Text */}
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
              Live brand monitoring, powered by AI
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Track Your Brand Mentions in Real Time
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              AI-powered monitoring across social media, news, blogs, and forums — stay ahead of negative spikes before they hurt your brand.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="get-started"
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/85 bg-slate-900/95 px-5 py-2 text-sm font-medium tracking-tight text-white shadow-sm hover:bg-black hover:border-black transition-colors"
              >
                Get Started Free
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium tracking-tight text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Live Demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&q=80"
                  alt="User"
                  className="h-7 w-7 rounded-full border border-white object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
                  alt="User"
                  className="h-7 w-7 rounded-full border border-white object-cover"
                />

                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  alt="User"
                  className="h-7 w-7 rounded-full border border-white object-cover"
                />
              </div>

              <span className="text-xs text-slate-500">
                Trusted by growth, PR &amp; CX teams worldwide.
              </span>
            </div>
          </div>

          {/* Hero Illustration / Dashboard Mockup */}
          <div className="relative">
            <div className="mx-auto lg:ml-auto lg:mr-0 w-full max-w-xl">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 overflow-hidden">

                {/* Mock Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                  </div>

                  <div className="h-6 w-32 rounded-md bg-white border border-slate-100"></div>
                  <div className="h-6 w-6 rounded-full border border-slate-200 bg-white"></div>
                </div>

                {/* Mock Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col gap-4">

                    {/* KPIs */}
                    <div className="grid grid-cols-3 gap-3">

                      <div className="rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-3">
                        <p className="text-[11px] text-slate-500">Total Mentions</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 tracking-tight">12,847</p>
                        <p className="mt-0.5 text-[11px] text-emerald-500">+18% this week</p>
                      </div>

                      <div className="rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-3">
                        <p className="text-[11px] text-slate-500">Positive</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 tracking-tight">72%</p>
                        <p className="mt-0.5 text-[11px] text-slate-500">Sentiment score</p>
                      </div>

                      <div className="rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-3">
                        <p className="text-[11px] text-slate-600">Negative Spike</p>
                        <p className="mt-1 text-sm font-semibold text-rose-600 tracking-tight">+243%</p>
                        <p className="mt-0.5 text-[11px] text-rose-500">Last 60 minutes</p>
                      </div>

                    </div>

                    {/* Charts & Feed */}
                    <div className="grid md:grid-cols-5 gap-4">

                      {/* Pie Chart Mock */}
                      <div className="md:col-span-2 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-medium text-slate-700">Sentiment Overview</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="relative h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
                            <div className="absolute inset-1 rounded-full border-[6px] border-emerald-400/80"></div>
                            <div className="absolute inset-2 rounded-full border-[6px] border-amber-300" style={{ clipPath: "polygon(0 0,100% 0,100% 50%,0 50%)" }}></div>
                            <div className="absolute inset-3 rounded-full border-[6px] border-rose-300" style={{ clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)" }}></div>
                            <span className="relative text-xs font-semibold text-slate-900">72%</span>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center text-[11px] text-slate-600">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 mr-2"></span> Positive
                            </div>

                            <div className="flex items-center text-[11px] text-slate-600">
                              <span className="h-2 w-2 rounded-full bg-amber-300 mr-2"></span> Neutral
                            </div>

                            <div className="flex items-center text-[11px] text-slate-600">
                              <span className="h-2 w-2 rounded-full bg-rose-300 mr-2"></span> Negative
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Trend Graph Mock */}
                      <div className="md:col-span-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-medium text-slate-700">Mentions Over Time</p>
                          <span className="text-[10px] text-slate-500">Last 24 hours</span>
                        </div>

                        <div className="h-20 relative">
                          <div className="absolute inset-0 flex flex-col justify-between">
                            <div className="border-t border-dashed border-slate-200"></div>
                            <div className="border-t border-dashed border-slate-200"></div>
                            <div className="border-t border-dashed border-slate-200"></div>
                          </div>

                          <div className="absolute inset-x-1 inset-y-2">
                            <svg viewBox="0 0 200 60" className="w-full h-full text-slate-900">
                              <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                points="5,40 30,35 60,25 90,28 120,18 150,25 180,15 195,20"
                              ></polyline>

                              <circle cx="180" cy="15" r="2" fill="currentColor"></circle>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feed & AI Insights */}
                    <div className="grid md:grid-cols-5 gap-4">

                      {/* Feed */}
                      <div className="md:col-span-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-medium text-slate-700">Live Mentions</p>
                          <span className="text-[10px] text-emerald-500">Streaming</span>
                        </div>

                        <div className="space-y-2">

                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[11px] text-slate-800 line-clamp-1">
                                “Delivery was incredibly fast, support team was super helpful.”
                              </p>
                              <p className="text-[10px] text-slate-500 mt-0.5">@customer • Twitter</p>
                            </div>

                            <span className="ml-2 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-600 border border-emerald-100">
                              Positive
                            </span>
                          </div>

                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[11px] text-slate-800 line-clamp-1">
                                “Pricing is fair but analytics could be more detailed.”
                              </p>
                              <p className="text-[10px] text-slate-500 mt-0.5">Review • Tech blog</p>
                            </div>

                            <span className="ml-2 inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-600 border border-amber-100">
                              Neutral
                            </span>
                          </div>

                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[11px] text-slate-800 line-clamp-1">
                                “Support hasn’t replied for hours. Really frustrating experience.”
                              </p>
                              <p className="text-[10px] text-slate-500 mt-0.5">CX forum • Europe</p>
                            </div>

                            <span className="ml-2 inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[10px] text-rose-600 border border-rose-100">
                              Negative
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="md:col-span-2 rounded-xl border border-slate-100 bg-slate-900 text-slate-50 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-medium text-slate-50">AI Insights</p>
                          <span className="text-[10px] text-slate-400">Updated now</span>
                        </div>

                        <p className="text-[11px] text-slate-100 leading-relaxed">
                          Negative mentions around <span className="font-medium">Delivery Time</span> increased by <span className="font-medium">3.1x</span> in the last hour, mainly from customers in <span className="font-medium">EMEA</span>. Consider prioritizing proactive status updates.
                        </p>

                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200 border border-slate-700">Delivery</span>
                          <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200 border border-slate-700">Support</span>
                          <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200 border border-slate-700">Alerts</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                {/* END MOCK CONTENT */}

              </div>
            </div>
          </div>
          {/* END HERO ILLUSTRATION */}

        </div>
      </div>
    </>
  );
}


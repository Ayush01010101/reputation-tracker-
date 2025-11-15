export default function Testimonials() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
            Loved by brand & support teams
          </h2>
          <p className="mt-2 text-sm text-slate-600">BrandPulse becomes the shared source of truth across marketing, PR, and CX.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-slate-900">Alex Rivera</p>
                <p className="text-[11px] text-slate-500">Head of Brand, Northwind</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">“We replaced three tools with BrandPulse. It’s the only dashboard our PR team keeps open all day.”</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=80&q=80"
                className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-slate-900">Maya Chen</p>
                <p className="text-[11px] text-slate-500">VP Customer Experience, Lumen</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">“The spike alerts have caught multiple issues before they hit our support queue. It’s become essential.”</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&q=80"
                className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-slate-900">Jordan Blake</p>
                <p className="text-[11px] text-slate-500">Director of Communications, Peakly</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">“The interface is calm and focused. Our weekly reporting is now a two-minute export instead of a two-hour project.”</p>
          </div>

        </div>
      </div>
    </section>
  )
}

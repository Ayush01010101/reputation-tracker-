
const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white" id="docs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-900">BP</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900">BrandPulse</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-xs text-slate-600">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-slate-700">Product</span>
              <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#demo" className="hover:text-slate-900 transition-colors">Live Demo</a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-slate-700">Company</span>
              <a href="#" className="hover:text-slate-900 transition-colors">About</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Press</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Status</a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-slate-700">Resources</span>
              <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
              <a href="#" className="hover:text-slate-900 transition-colors">API</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Changelog</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {["Twitter", "LinkedIn", "GitHub"].map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition"
              >
                <span className="sr-only">{item}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </button>
            ))}
          </div>

        </div>

        <div className="border-t border-slate-100 mt-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-[11px] text-slate-500">© {new Date().getFullYear()} BrandPulse. All rights reserved.</p>

            <div className="flex gap-4 text-[11px] text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#signin" className="hover:text-slate-900 transition-colors">Sign in</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

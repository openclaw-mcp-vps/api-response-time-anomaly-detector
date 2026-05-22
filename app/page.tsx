export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert when API responses<br />
          <span className="text-[#58a6ff]">slow down unexpectedly</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Continuously monitor your API endpoints, detect subtle performance degradation using statistical anomaly detection, and receive real-time alerts before your users ever notice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $15/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">Z-Score</div>
            Statistical anomaly detection on response time variance
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">Real-time</div>
            Email &amp; webhook alerts the moment degradation is detected
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">Any API</div>
            Monitor REST, GraphQL, or any HTTP endpoint you own
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50 monitored endpoints</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 1-minute check intervals</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Statistical anomaly detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; webhook alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 30-day response time history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dashboard &amp; trend charts</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does anomaly detection work?</h3>
            <p className="text-[#8b949e] text-sm">We calculate a rolling mean and standard deviation of your endpoint&apos;s response times. When a new measurement deviates beyond a configurable Z-score threshold, an alert is triggered — catching gradual slowdowns that fixed thresholds miss.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What alert channels are supported?</h3>
            <p className="text-[#8b949e] text-sm">Alerts are delivered via email and outbound webhooks, so you can pipe them into Slack, PagerDuty, Discord, or any system that accepts HTTP POST requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I monitor private or internal APIs?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can add authentication headers (Bearer tokens, API keys, etc.) to each monitored endpoint so we can reach protected or internal services that require credentials.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} API Anomaly Detector. All rights reserved.
      </footer>
    </main>
  );
}

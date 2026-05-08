import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg" />
            <span className="text-xl font-bold tracking-tight">AgentOps</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <Link href="#features" className="hover:text-white transition">Features</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#roadmap" className="hover:text-white transition">Roadmap</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#waitlist" className="text-sm text-gray-400 hover:text-white transition">Log in</Link>
            <Link href="#waitlist" className="text-sm bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now in Private Beta — 200+ teams on waitlist
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Monitor & Optimize
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              AI Agent Operations
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time token tracking, cost allocation, latency monitoring, and performance scoring for your AI agent infrastructure. Built for teams shipping with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#waitlist" className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition text-center">
              Join the Waitlist →
            </Link>
            <Link href="#features" className="w-full sm:w-auto border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 transition text-center">
              See How It Works
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ No credit card</span>
            <span>✓ Free tier available</span>
            <span>✓ Setup in 5 min</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-1">
            <div className="bg-gray-950 rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 ml-2">agentops dashboard</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-500 text-xs mb-1">Total Tokens</div>
                  <div className="text-2xl font-bold text-cyan-400">2.4M</div>
                  <div className="text-xs text-green-400">↑ 12% today</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-500 text-xs mb-1">Est. Cost</div>
                  <div className="text-2xl font-bold text-violet-400">$48.20</div>
                  <div className="text-xs text-red-400">↑ 8% today</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-500 text-xs mb-1">Avg Latency</div>
                  <div className="text-2xl font-bold text-emerald-400">1.2s</div>
                  <div className="text-xs text-green-400">↓ 15% today</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-500 text-xs mb-1">Success Rate</div>
                  <div className="text-2xl font-bold text-yellow-400">98.7%</div>
                  <div className="text-xs text-green-400">↑ 0.3% today</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">agent:support-bot-v3</span>
                  <span className="text-cyan-400">340K tokens</span>
                  <span className="text-emerald-400">99.1% success</span>
                  <span className="text-gray-500">0.8s avg</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">agent:code-reviewer</span>
                  <span className="text-cyan-400">180K tokens</span>
                  <span className="text-emerald-400">97.8% success</span>
                  <span className="text-gray-500">2.1s avg</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">agent:data-pipeline</span>
                  <span className="text-cyan-400">890K tokens</span>
                  <span className="text-yellow-400">94.2% success</span>
                  <span className="text-gray-500">3.4s avg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Everything you need to run AI agents in production</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From token tracking to cost allocation, latency monitoring to budget controls — AgentOps gives you full visibility.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Real-Time Token Tracking", desc: "Monitor token consumption across OpenAI, Anthropic, Google, and custom providers in real-time." },
              { icon: "💰", title: "Cost Allocation", desc: "Allocate costs per agent, per team, per project. Know exactly where your AI budget goes." },
              { icon: "⚡", title: "Latency Monitoring", desc: "Track response times, identify bottlenecks, and optimize agent performance." },
              { icon: "🎯", title: "Performance Scoring", desc: "Success rate, retry rate, hallucination detection — score every agent automatically." },
              { icon: "🔔", title: "Budget Controls", desc: "Set spending limits, get alerts, auto-throttle agents when budgets are exceeded." },
              { icon: "🔗", title: "Integrations", desc: "Slack, Discord, PagerDuty, webhooks — get alerts where your team already works." },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/50 transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-center mb-16">Start free, scale as you grow.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Free", price: "$0", period: "/mo", features: ["1 agent", "10K tokens/day", "Basic dashboard", "Community support"], cta: "Get Started", highlight: false },
              { name: "Pro", price: "$29", period: "/mo", features: ["10 agents", "1M tokens/day", "Alerts & Slack", "Email support", "API access"], cta: "Start Free Trial", highlight: true },
              { name: "Team", price: "$99", period: "/mo", features: ["50 agents", "Unlimited tokens", "Multi-team", "SSO", "Priority support"], cta: "Start Free Trial", highlight: false },
              { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited agents", "Dedicated support", "SLA", "On-prem option", "Custom integrations"], cta: "Contact Sales", highlight: false },
            ].map((p, i) => (
              <div key={i} className={`rounded-xl p-6 ${p.highlight ? "bg-gradient-to-b from-violet-600/20 to-cyan-600/10 border-2 border-violet-500/50" : "bg-white/5 border border-white/10"}`}>
                {p.highlight && <div className="text-xs font-semibold text-violet-400 mb-2">MOST POPULAR</div>}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-gray-400">{p.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#waitlist" className={`block text-center py-2.5 rounded-lg font-medium text-sm ${p.highlight ? "bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90" : "bg-white/10 hover:bg-white/20"} transition`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to take control of your AI costs?</h2>
          <p className="text-gray-400 mb-8">Join 200+ teams on the waitlist. Get early access + lifetime discount.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
            />
            <button type="submit" className="bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap">
              Join Waitlist →
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-400 rounded" />
            <span className="font-semibold">AgentOps</span>
            <span className="text-gray-500 text-sm">by ZOO Technologies</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 ZOO Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

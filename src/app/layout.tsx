import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentOps Dashboard — Real-Time AI Agent Monitoring & Cost Optimization",
  description: "Monitor, optimize, and scale your AI agent infrastructure. Real-time token tracking, cost allocation, latency monitoring, and performance scoring for AI teams.",
  keywords: ["AI agent monitoring", "token tracking", "AI cost optimization", "agent operations", "LLM monitoring", "AI infrastructure"],
  openGraph: {
    title: "AgentOps Dashboard — AI Agent Monitoring",
    description: "Real-time token tracking, cost allocation, and performance scoring for AI agent teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

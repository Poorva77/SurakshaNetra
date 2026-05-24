import React from "react";
import {
  Shield,
  Fingerprint,
  MousePointer2,
  Keyboard,
  ScanFace,
  Siren,
  AudioWaveform,
  Smartphone,
  Activity,
  AlertTriangle,
  Radar,
  LockKeyhole,
} from "lucide-react";

import { motion } from "framer-motion";

const attackCards = [
  {
    title: "Deepfake Attacks",
    icon: <ScanFace className="w-10 h-10" />,
    desc: "Synthetic identities bypass facial verification with terrifying realism.",
  },
  {
    title: "OTP Theft",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "SIM swaps and phishing pipelines intercept authentication codes instantly.",
  },
  {
    title: "Voice Cloning",
    icon: <AudioWaveform className="w-10 h-10" />,
    desc: "AI-generated voices manipulate support systems and customers alike.",
  },
  {
    title: "Session Hijacking",
    icon: <LockKeyhole className="w-10 h-10" />,
    desc: "Attackers silently inherit trusted sessions after credential compromise.",
  },
];

const biometrics = [
  {
    title: "Typing Rhythm",
    icon: <Keyboard className="w-8 h-8" />,
    desc: "Every human types with microscopic timing patterns impossible to mimic perfectly.",
  },
  {
    title: "Mouse Movement",
    icon: <MousePointer2 className="w-8 h-8" />,
    desc: "Cursor acceleration, hesitation, and movement arcs create behavioral DNA.",
  },
  {
    title: "Device Fingerprint",
    icon: <Fingerprint className="w-8 h-8" />,
    desc: "Hardware signals and browser entropy reveal hidden anomalies instantly.",
  },
  {
    title: "Navigation Behavior",
    icon: <Radar className="w-8 h-8" />,
    desc: "How users navigate reveals intent long before fraud becomes visible.",
  },
];

const futureCards = [
  "AI Insider Threat Prediction",
  "Quantum-Ready Authentication",
  "Autonomous Fraud Response",
  "Cross-Bank Threat Intelligence",
];

const logs = [
  "[02:14:08] Suspicious login attempt detected",
  "[02:14:10] Voice mismatch probability: 92%",
  "[02:14:12] OTP replay attack blocked",
  "[02:14:18] Behavioral trust score dropped",
  "[02:14:20] Session isolated automatically",
];

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a33,transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(to_right,#0ea5e922_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e922_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-cyan-500/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wider text-cyan-400">
            NetraShield
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#story">Threat Story</a>
            <a href="#solution">Behavioral AI</a>
            <a href="#simulation">Simulation</a>
            <a href="#dashboard">Dashboard</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">
              AI-Powered Banking Cybersecurity
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Faces can be forged.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Human behavior cannot.
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            NetraShield detects fraud before credentials are abused by
            analyzing behavioral biometrics invisible to attackers.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition shadow-[0_0_40px_#06b6d4] font-semibold">
              Launch Simulation
            </button>

            <button className="px-8 py-4 rounded-2xl border border-cyan-500/40 backdrop-blur-xl hover:bg-cyan-500/10 transition">
              Explore Threats
            </button>
          </div>
        </motion.div>

        {/* Glow blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full" />
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="py-32 px-6 max-w-7xl mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
            Threat Narrative
          </p>

          <h2 className="text-5xl font-bold mb-14">
            Traditional authentication is cracking.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Credentials Stolen",
                desc: "Phishing kits harvest usernames and passwords within seconds.",
              },
              {
                step: "02",
                title: "Identity Cloned",
                desc: "Deepfake video and AI voice models recreate trusted identities.",
              },
              {
                step: "03",
                title: "Fraud Executed",
                desc: "Attackers bypass verification while appearing perfectly legitimate.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(14,165,233,0.12)]"
              >
                <span className="text-cyan-400 text-5xl font-black">
                  {item.step}
                </span>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Horizontal Attack Cards */}
      <section className="py-24 overflow-hidden">
        <div className="mb-10 px-6">
          <h2 className="text-5xl font-bold">
            Modern attacks move like shadows.
          </h2>
        </div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex gap-8 w-max px-6"
        >
          {[...attackCards, ...attackCards].map((card, idx) => (
            <div
              key={idx}
              className="w-[420px] p-10 rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-xl"
            >
              <div className="text-cyan-400">{card.icon}</div>

              <h3 className="text-3xl font-bold mt-8">{card.title}</h3>

              <p className="mt-5 text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Solution */}
      <section
        id="solution"
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Behavioral Biometrics
          </p>

          <h2 className="text-6xl font-black mt-6">
            Security beyond passwords.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {biometrics.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                {item.icon}
              </div>

              <h3 className="mt-6 text-3xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simulation */}
      <section
        id="simulation"
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-cyan-500/5 backdrop-blur-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 blur-[140px]" />

          <div className="flex items-center gap-3 mb-10">
            <Siren className="text-red-400 w-10 h-10" />
            <h2 className="text-5xl font-bold">
              Fraud Detection Simulation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Live AI analysis indicates abnormal navigation speed, synthetic
                voice probability, and session takeover behavior.
              </p>

              <div className="mt-10">
                <div className="flex justify-between mb-3">
                  <span>Trust Score</span>
                  <span className="text-red-400">18%</span>
                </div>

                <div className="w-full h-5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "18%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                  />
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 bg-red-500/10">
                <AlertTriangle className="text-red-400" />
                <span>
                  High-risk behavioral anomaly detected. Session isolated.
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  AI Signal Analysis
                </h3>

                <Activity className="text-cyan-400 animate-pulse" />
              </div>

              <div className="mt-8 space-y-5">
                {[
                  ["Typing Consistency", "12%"],
                  ["Mouse Entropy", "8%"],
                  ["Voice Authenticity", "91% risk"],
                  ["Device Match", "FAILED"],
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between border-b border-white/10 pb-3"
                  >
                    <span className="text-gray-400">{row[0]}</span>
                    <span className="font-semibold">{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section
        id="dashboard"
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <Activity className="text-cyan-400 w-10 h-10" />

          <h2 className="text-5xl font-bold">
            Live Cybersecurity Dashboard
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-semibold">
                Threat Activity Feed
              </h3>

              <span className="text-green-400 animate-pulse">
                SYSTEM ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-black/40 border border-cyan-500/10 font-mono text-sm text-cyan-300"
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8">
            <h3 className="text-2xl font-semibold mb-8">
              Threat Metrics
            </h3>

            <div className="space-y-8">
              {[
                ["Threats Blocked", "12,482"],
                ["Active Sessions", "1,209"],
                ["Behavioral Accuracy", "99.2%"],
                ["AI Response Time", "0.8s"],
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">{metric[0]}</span>
                    <span className="font-bold">{metric[1]}</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 bg-cyan-400 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
            Future Roadmap
          </p>

          <h2 className="text-6xl font-black mb-16">
            The next era of trust infrastructure.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <Shield className="text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug">
                  {card}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-cyan-500/10 text-center text-gray-500">
        <p>
          NetraShield © 2026 • AI-Powered Behavioral Fraud Defense
        </p>
      </footer>
    </div>
  );
}
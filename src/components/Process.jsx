import { useState, useEffect, useRef } from "react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: "🤝",
      step: "01",
      title: "Understanding Your Business",
      desc: "We learn your goals, audience, and vision.",
      detail: "30-min deep-dive call. We ask the right questions so nothing gets missed.",
      duration: "Day 1",
      color: "#6366f1",
      bg: "#eef2ff",
    },
    {
      icon: "🎨",
      step: "02",
      title: "Design Preview",
      desc: "Visual concept so you can review early.",
      detail: "You see exactly what you're getting before a single line of code is written.",
      duration: "Days 2–4",
      color: "#8b5cf6",
      bg: "#f5f3ff",
    },
    {
      icon: "⚙️",
      step: "03",
      title: "Development",
      desc: "Building your solution with care.",
      detail: "Clean, fast, mobile-first code. No shortcuts, no templates.",
      duration: "Days 5–12",
      color: "#0ea5e9",
      bg: "#f0f9ff",
    },
    {
      icon: "💬",
      step: "04",
      title: "Feedback & Refinement",
      desc: "Adjustments until you're happy.",
      detail: "Unlimited revision rounds. We iterate until it's exactly right.",
      duration: "Days 13–14",
      color: "#10b981",
      bg: "#ecfdf5",
    },
    {
      icon: "🚀",
      step: "05",
      title: "Launch & Support",
      desc: "Smooth launch with ongoing help.",
      detail: "We handle deployment and stay on call for 30 days post-launch.",
      duration: "Day 14+",
      color: "#f59e0b",
      bg: "#fffbeb",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleStepClick = (i) => {
    setActiveStep(activeStep === i ? null : i);
    if (!completedSteps.includes(i)) setCompletedSteps([...completedSteps, i]);
  };

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        padding: "80px 0",
        background: "linear-gradient(160deg, #f8f9ff 0%, #ffffff 60%, #f0fdf4 100%)",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@700;800&display=swap');
        .step-card {
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          border-radius: 20px;
          padding: 24px 20px;
          position: relative;
        }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .step-card.active { border-color: var(--step-color); box-shadow: 0 0 0 3px color-mix(in srgb, var(--step-color) 12%, transparent); }
        .step-card.done::after {
          content: '✓';
          position: absolute; top: 12px; right: 12px;
          background: #10b981; color: white;
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
        }
        .expand-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease; opacity: 0; }
        .expand-body.open { max-height: 100px; opacity: 1; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease both; }
        .ping { width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; display: inline-block; animation: ping 1.5s infinite; }
        @keyframes ping { 0%,100%{ opacity:1; transform: scale(1); } 50%{ opacity:0.4; transform: scale(1.5); } }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div className={visible ? "fade-up" : ""} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff3cd", border: "1px solid #fbbf24", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: "#92400e" }}>
              <span className="ping" /> 14 clients onboarded this month
            </span>
            <span style={{ background: "#ecfdf5", border: "1px solid #6ee7b7", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: "#065f46" }}>
              ⏱ Avg. delivery: 14 days
            </span>
          </div>

          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#6366f1", textTransform: "uppercase", marginBottom: 10 }}>
            ✦ Our Process
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>
            From idea to launch in{" "}
            <span style={{ background: "linear-gradient(90deg,#6366f1,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              14 days
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 460, margin: "0 auto" }}>
            Click each step to explore what happens.
          </p>
        </div>

        {/* Progress bar */}
        {progress > 0 && (
          <div style={{ maxWidth: 500, margin: "0 auto 36px", textAlign: "center" }}>
            <div style={{ background: "#f1f5f9", borderRadius: 999, height: 6, marginBottom: 8 }}>
              <div style={{ height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#6366f1,#8b5cf6)", width: `${progress}%`, transition: "width 0.5s ease" }} />
            </div>
            <p style={{ fontSize: 12, color: "#6366f1", fontWeight: 600 }}>
              {completedSteps.length} of {steps.length} steps explored
            </p>
          </div>
        )}

        {/* Step Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-card${activeStep === i ? " active" : ""}${completedSteps.includes(i) ? " done" : ""}${visible ? " fade-up" : ""}`}
              style={{ "--step-color": step.color, animationDelay: `${0.1 + i * 0.1}s` }}
              onClick={() => handleStepClick(i)}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: step.color, marginBottom: 10, letterSpacing: "0.08em" }}>
                STEP {step.step}
              </div>

              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: step.bg, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 20, marginBottom: 12,
                border: `1.5px solid ${step.color}22`
              }}>
                {step.icon}
              </div>

              <span style={{ display: "inline-block", background: step.bg, color: step.color, borderRadius: 999, padding: "2px 10px", fontSize: 11, fontWeight: 600, marginBottom: 10 }}>
                {step.duration}
              </span>

              <h3 style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 6 }}>
                {step.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                {step.desc}
              </p>

              <div className={`expand-body${activeStep === i ? " open" : ""}`}>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px dashed ${step.color}44` }}>
                  <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                    {step.detail}
                  </p>
                </div>
              </div>

              {activeStep !== i && !completedSteps.includes(i) && (
                <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 10, fontWeight: 500 }}>Tap to learn more ↓</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 16 }}>
            Ready to start? <strong>3 spots available this month.</strong>
          </p>
          <button
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", border: "none", borderRadius: 14,
              padding: "14px 32px", fontSize: 15, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 8px 24px #6366f140",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Get My Free Audit Now →
          </button>
        </div>

      </div>
    </section>
  );
}
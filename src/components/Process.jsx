import { useState } from "react";

export default function Process() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Understanding your business goals & audience.",
      icon: "🤝",
    },
    {
      number: "02",
      title: "UI/UX Design",
      desc: "Creating clean modern interface concepts.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Development",
      desc: "Building fast scalable systems.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Refinement",
      desc: "Feedback, polishing & optimization.",
      icon: "💬",
    },
    {
      number: "05",
      title: "Launch",
      desc: "Deployment & growth support.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="process"
      style={{
        padding: "90px 20px",
        background:
          "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6366f1",
            }}
          >
            OUR PROCESS
          </span>

          <h2
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: "1.05",
              fontWeight: "800",
              marginTop: "18px",
              marginBottom: "18px",
              color: "#0f172a",
            }}
          >
            Simple Process.
            <br />
            Premium Results.
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              fontSize: "16px",
              color: "#64748b",
              lineHeight: "1.7",
            }}
          >
            From strategy to launch — everything is designed to
            move fast, look premium, and convert better.
          </p>
        </div>

        {/* PROCESS ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "18px",
            alignItems: "stretch",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              style={{
                position: "relative",
                padding: "28px 22px",
                borderRadius: "24px",
                background:
                  active === index
                    ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                    : "rgba(255,255,255,0.72)",
                border:
                  active === index
                    ? "1px solid transparent"
                    : "1px solid rgba(15,23,42,0.06)",
                backdropFilter: "blur(12px)",
                transition: "0.35s ease",
                transform:
                  active === index
                    ? "translateY(-8px)"
                    : "translateY(0px)",
                boxShadow:
                  active === index
                    ? "0 20px 40px rgba(99,102,241,0.22)"
                    : "0 4px 20px rgba(15,23,42,0.04)",
                minHeight: "240px",
                cursor: "pointer",
              }}
            >
              {/* TOP */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "26px",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    background:
                      active === index
                        ? "rgba(255,255,255,0.18)"
                        : "#eef2ff",
                  }}
                >
                  {step.icon}
                </div>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color:
                      active === index
                        ? "rgba(255,255,255,0.7)"
                        : "#94a3b8",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* CONTENT */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color:
                    active === index
                      ? "#fff"
                      : "#0f172a",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color:
                    active === index
                      ? "rgba(255,255,255,0.82)"
                      : "#64748b",
                }}
              >
                {step.desc}
              </p>

              {/* BOTTOM LINE */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width:
                    active === index ? "100%" : "0%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg,#6366f1,#8b5cf6)",
                  borderRadius: "999px",
                  transition: "0.4s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "55px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "16px 34px",
              borderRadius: "16px",
              border: "none",
              background:
                "linear-gradient(135deg,#6366f1,#8b5cf6)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow:
                "0 14px 30px rgba(99,102,241,0.28)",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          >
            Start Your Project →
          </button>
        </div>
      </div>
    </section>
  );
}
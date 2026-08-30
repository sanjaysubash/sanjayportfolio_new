import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sanjay Subash — Software Engineer / Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f6f3",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6b6963",
          }}
        >
          Sanjay Subash
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: "#0a0a0a",
            maxWidth: 900,
          }}
        >
          Building AI-powered products where engineering, design and data meet.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#3a3936",
          }}
        >
          Product Engineering · Software Architecture · Full Stack · AI Systems
        </div>
      </div>
    ),
    { ...size }
  );
}

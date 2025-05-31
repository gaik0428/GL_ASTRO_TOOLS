import React from "react";

const shadbalaData = [
  { name: "Sun", value: 19.59 },
  { name: "Moon", value: 24.43 },
  { name: "Mars", value: 16.35 },
  { name: "Mercury", value: 3.93 },
  { name: "Jupiter", value: 17.84 },
  { name: "Venus", value: 34.21 },
  { name: "Saturn", value: 45.5 }
];

const maxValue = Math.max(...shadbalaData.map(p => p.value));

function Cone3D({ x, y, r, h }) {
  return (
    <g>
      <defs>
        <radialGradient id="coneGrad" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ff3c00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c22a00" />
        </radialGradient>
      </defs>
      <ellipse
        cx={x}
        cy={y + h + 2}
        rx={r + 1}
        ry={r * 0.35}
        fill="#c22a00"
        opacity="1"
      />
      <polygon
        points={`${x - r},${y + h} ${x + r},${y + h} ${x},${y}`}
        fill="url(#coneGrad)"
        stroke="#c22a00"
        strokeWidth="1.5"
      />
    </g>
  );
}

const StrengthChart = () => {
  const width = 700;
  const height = 240;
  const baseY = 190;
  const coneSpacing = 98;
  const coneBaseRadius = 26;
  const coneMinHeight = 28;
  const coneMaxHeight = 90;

  return (
    <div style={{ width: "100%", maxWidth: width, margin: "0 auto", background: "#fff" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
      }}>
        <div style={{
          width: 24, height: 24, background: "#ff3c00", borderRadius: 4, marginRight: 12
        }} />
        <span style={{
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Segoe UI, Arial, sans-serif",
          color: "#111"
        }}>Shadbala</span>
      </div>

      <svg width={width} height={height}>
        {shadbalaData.map((planet, idx) => {
          const coneHeight = coneMinHeight + (planet.value / maxValue) * (coneMaxHeight - coneMinHeight);
          const x = 60 + idx * coneSpacing;

          return (
            <g key={planet.name}>
              <text
                x={x}
                y={baseY - coneHeight - 12}
                textAnchor="middle"
                fontWeight="bold"
                fontSize={16}
                fill="#002060"
                style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}
              >
                {planet.name}, {planet.value}
              </text>
              <Cone3D x={x} y={baseY - coneHeight} r={coneBaseRadius} h={coneHeight} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default StrengthChart;

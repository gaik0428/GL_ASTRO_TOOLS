import React from "react";

// Data
const planetData = [
  { name: "Sun", value: 2.5 },
  { name: "Moon", value: 1 },
  { name: "Mars", value: 0.5 },
  { name: "Mercury", value: 1 },
  { name: "Jupiter", value: 1 },
  { name: "Venus", value: 1.5 },
  { name: "Saturn", value: 1.5 },
  { name: "Rahu", value: 0.5 },
  { name: "Ketu", value: -2 }
];

const houseData = [
  { name: "Asc", value: 1 },
  { name: "2nd Ho", value: 1.5 },
  { name: "3rd Ho", value: 1 },
  { name: "4th Ho", value: 1.5 },
  { name: "5th Ho", value: 1 },
  { name: "6th Ho", value: -0.5 },
  { name: "7th Ho", value: 0 },
  { name: "8th Ho", value: 1.5 },
  { name: "9th Ho", value: 1 },
  { name: "10th Ho", value: -3 },
  { name: "11th Ho", value: 1 },
  { name: "12th Ho", value: 2 }
];

// 3D Pyramid SVG
function Pyramid3D({ x, y, size, color, flip }) {
  const width = size * 0.8;
  const height = size;

  const tipY = flip ? y + height : y;
  const baseY = flip ? y : y + height;

  const baseWidthLeft = width * 0.6;
  const baseWidthRight = width * 0.4;

  const leftFace = [
    [x, tipY],
    [x - baseWidthLeft / 2, baseY],
    [x, baseY]
  ].map(p => p.join(",")).join(" ");

  const rightFace = [
    [x, tipY],
    [x, baseY],
    [x + baseWidthRight / 2, baseY]
  ].map(p => p.join(",")).join(" ");

  const centerFace = [
    [x, tipY],
    [x - baseWidthLeft / 2, baseY],
    [x + baseWidthRight / 2, baseY]
  ].map(p => p.join(",")).join(" ");

  let colorDark, colorLight;

  if (color === "#ff853f") {
    // Orange (planets)
    colorDark = "#a75224";
    colorLight = "#ff803c";
  } else if (color === "#00c96b") {
    // Green (houses)
    colorDark = "#00833c";
    colorLight = "#08c760";
  }
  const colorMain = color;

  return (
    <g>
      <polygon points={centerFace} fill={colorMain} stroke="#444" strokeWidth={1.2} />
      <polygon points={leftFace} fill={colorLight} opacity={0.9} />
      <polygon points={rightFace} fill={colorDark} opacity={0.75} />
    </g>
  );
}

const Custom3DChart = () => {
  // Smaller layout constants
  const width = 1000;
  const height = 575;
  const planetY = 140;
  const houseY = 420;
  const planetSpacing = 100; // tighter spacing
  const houseSpacing = 90;

  return (
    <div>
      <svg width={width} height={height}>
        {/* Planets in orange */}
        {planetData.map((p, i) => {
          const x = 100 + i * planetSpacing;
          const size = 80 + Math.abs(p.value) * 15; // reduced size
          const flip = p.value < 0;
          const y = flip ? planetY : planetY - size;
          return (
            <g key={p.name}>
              <text
                x={x}
                y={flip ? planetY + size + 20 : planetY - size - 8}
                textAnchor="middle"
                fontWeight="bold"
                fontSize={15}
                fill="#f1461e"
                style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}
              >
                {p.name}, {p.value}
              </text>
              <Pyramid3D
                x={x}
                y={y}
                size={size}
                color="#ff853f"
                flip={flip}
              />
            </g>
          );
        })}
        {/* Houses in green */}
        {houseData.map((h, i) => {
          const x = 50 + i * houseSpacing;
          const size = 80 + Math.abs(h.value) * 12;
          const flip = h.value < 0;
          const y = flip ? houseY : houseY - size;
          return (
            <g key={h.name}>
              <text
                x={x}
                y={flip ? houseY + size + 16 : houseY - size - 6}
                textAnchor="middle"
                fontWeight="bold"
                fontSize={15}
                fill="#f1461e"
                style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}
              >
                {h.name}, {h.value}
              </text>
              <Pyramid3D
                x={x}
                y={y}
                size={size}
                color="#00c96b"
                flip={flip}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Custom3DChart;

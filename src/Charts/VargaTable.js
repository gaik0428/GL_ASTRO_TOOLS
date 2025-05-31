import React from "react";

const vargaHeaders = [
  "Planets", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"
];

// Each row is now an object with keys matching headers
const vargaData = [
  {
    Planets: "D-1",
    Sun: "Sagittarius : Friend Sign",
    Moon: { text: "Cancer : Own Sign", className: "own" },
    Mars: { text: "Scorpio : Own Sign", className: "own" },
    Mercury: "Scorpio : Enemy Sign",
    Jupiter: "Leo : Friend Sign",
    Venus: { text: "Libra : Mooltrikon", className: "mool" },
    Saturn: { text: "Capricorn : Own Sign", className: "own" }
  },
  {
    Planets: "D-2",
    Sun: { text: "Leo : Mooltrikon, Own Sign", className: "mool" },
    Moon: { text: "Scorpio : Debilitation", className: "deb" },
    Mars: { text: "Cancer : Debilitation", className: "deb" },
    Mercury: "Cancer : Enemy Sign",
    Jupiter: { text: "Capricorn : Debilitation", className: "deb" },
    Venus: { text: "Taurus : Own Sign", className: "own" },
    Saturn: { text: "Libra : Exaltation", className: "exalt" }
  },
  {
    Planets: "D-3",
    Sun: { text: "Aries : Exaltation", className: "exalt" },
    Moon: "Pisces : Enemy Sign",
    Mars: "Pisces : Friend Sign",
    Mercury: "Aquarius : Enemy Sign",
    Jupiter: "Gemini : Enemy Sign",
    Venus: "Sagittarius : Enemy Sign",
    Saturn: "Leo : Enemy Sign"
  },
  {
    Planets: "D-7",
    Sun: "Aquarius : Enemy Sign",
    Moon: { text: "Cancer : Own Sign", className: "own" },
    Mars: "Libra : Enemy Sign",
    Mercury: "Leo : Friend Sign",
    Jupiter: { text: "Sagittarius : Mooltrikon", className: "mool" },
    Venus: "Aries : Enemy Sign",
    Saturn: "Virgo : Friend Sign"
  },
  {
    Planets: "D-9",
    Sun: "Gemini : Enemy Sign",
    Moon: "Aquarius : Enemy Sign",
    Mars: "Aquarius : Enemy Sign",
    Mercury: { text: "Sagittarius : Friend Sign", className: "friend" },
    Jupiter: "Libra : Enemy Sign",
    Venus: "Gemini : Friend Sign",
    Saturn: { text: "Aries : Debilitation", className: "deb" }
  },
  {
    Planets: "D-10",
    Sun: "Aquarius : Enemy Sign",
    Moon: "Gemini : Friend Sign",
    Mars: "Libra : Enemy Sign",
    Mercury: "Cancer : Enemy Sign",
    Jupiter: "Aquarius : Enemy Sign",
    Venus: "Capricorn : Friend Sign",
    Saturn: { text: "Capricorn : Own Sign", className: "own" }
  },
  {
    Planets: "D-12",
    Sun: "Cancer : Friend Sign",
    Moon: "Aquarius : Enemy Sign",
    Mars: { text: "Capricorn : Exaltation", className: "exalt" },
    Mercury: "Libra : Friend Sign",
    Jupiter: { text: "Sagittarius : Mooltrikon", className: "mool" },
    Venus: { text: "Pisces : Exaltation", className: "exalt" },
    Saturn: "Leo : Enemy Sign"
  },
  {
    Planets: "D-16",
    Sun: { text: "Aries : Exaltation", className: "exalt" },
    Moon: { text: "Taurus : Exaltation", className: "exalt" },
    Mars: "Virgo : Enemy Sign",
    Mercury: "Taurus : Exaltation",
    Jupiter: { text: "Cancer : Exaltation", className: "exalt" },
    Venus: "Gemini : Friend Sign",
    Saturn: { text: "Libra : Exaltation", className: "exalt" }
  },
  {
    Planets: "D-30",
    Sun: "Sagittarius : Friend Sign",
    Moon: "Sagittarius : Friend Sign",
    Mars: "Libra : Enemy Sign",
    Mercury: "Aquarius : Enemy Sign",
    Jupiter: { text: "Sagittarius : Mooltrikon", className: "mool" },
    Venus: "Leo : Enemy Sign",
    Saturn: "Virgo : Friend Sign"
  },
  {
    Planets: "D-60",
    Sun: "Taurus : Enemy Sign",
    Moon: { text: "Scorpio : Debilitation", className: "deb" },
    Mars: "Sagittarius : Friend Sign",
    Mercury: "Leo : Friend Sign",
    Jupiter: { text: "Capricorn : Debilitation", className: "deb" },
    Venus: "Gemini : Friend Sign",
    Saturn: "Scorpio : Enemy Sign"
  }
];

// CSS styles for coloring
const cellStyle = {
  border: "2px solid black",
  fontWeight: 600,
  fontSize: 13,
  textAlign: "left",
  padding: "1px 10px",
  fontFamily: "Segoe UI, Arial, sans-serif",
  textAlign: "center",
};

const headerStyle = {
  ...cellStyle,
  background: "#0070b8",
  color: "#fff",
  fontWeight: 700,
  fontSize: 22,
  textAlign: "center",
};

const leftColStyle = {
  ...cellStyle,
  background: "#0070b8",
  color: "#fff",
  fontWeight: 700,
  fontSize: 20
};

const getClassColor = (cls) => {
  if (cls === "exalt") return { color: "#0047b3", fontWeight: 700 };
  if (cls === "deb") return { color: "#d60000", fontWeight: 700 };
  if (cls === "mool" || cls === "own") return { color: "#3d5c1e", fontWeight: 700 };
  return {};
};

const VargaTable = () => (
  <div style={{ overflowX: "auto", background: "#fff", marginTop: 120, marginLeft: 30, marginBottom: 113 }}>
    <table style={{ borderCollapse: "collapse", minWidth: 800, width: "95%" }}>
      <colgroup>
        {vargaHeaders.map((_, index) => (
          <col key={index} style={{ width: `${120 / vargaHeaders.length}%` }} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {vargaHeaders.map((col) => (
            <th key={col} style={headerStyle}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {vargaData.map((row, i) => (
          <tr key={row.Planets}>
            {vargaHeaders.map((col, j) =>
              j === 0 ? (
                <td key={col} style={leftColStyle}>{row[col]}</td>
              ) : (
                <td
                  key={col}
                  style={{
                    ...cellStyle,
                    ...(typeof row[col] === "object" ? getClassColor(row[col].className) : {})
                  }}
                >
                  {typeof row[col] === "object" ? row[col].text : row[col]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VargaTable;
import React from "react";

const remedyData = [
  {
    label: "Houses & Karaka",
    house: "House\n6th House",
    karaka: "Karaka\nSaturn",
    houseFromKaraka: "House from Karaka\n10th House"
  },
  {
    label: "Free Will",
    house: "33%",
    karaka: "33%",
    houseFromKaraka: "84%"
  },
  {
    label: "Score",
    house: "- 0.5 Point",
    karaka: "1.5 Point",
    houseFromKaraka: "- 3.0 Point"
  },
  {
    label: "Benefic / Malefic",
    house: { text: "Malefic", className: "malefic" },
    karaka: { text: "Benefic", className: "benefic" },
    houseFromKaraka: { text: "Malefic", className: "malefic" }
  },
  {
    label: "Type Of Remedy",
    house: "Yagya, Rudraksha, Mantra, & Donation",
    karaka: "Yagya, Rudraksha, Mantra, & Donation",
    houseFromKaraka: "Yagya, Rudraksha, Mantra, & Donation"
  },
  {
    label: "Rudraksha / Herbs",
    house: "Wear 4 Mukhi Rudraksha in red/black thread around the Neck or in the Working Hand on the day of your Janma Nakshatra or Saturday or Saturn Hora",
    karaka: "Wear 4 Mukhi Rudraksha in red/black thread around the Neck or in the Working Hand on the day of your Janma Nakshatra or Saturday or Saturn Hora",
    houseFromKaraka: "Wear 10 Mukhi Rudraksha in red/black thread around the Neck or in the Working Hand on the day of your Janma Nakshatra or Wednesday or Mercury Hora"
  },
  {
    label: "Yagya / Gems",
    house: "Vedic Shani Shanti Yagya For Pacifying The Planet Saturn/Shani",
    karaka: "Vedic Shani Shanti Yagya For Pacifying The Planet Saturn/Shani",
    houseFromKaraka: "Vedic Budha Shanti Yagya For Pacifying The Planet Mercury/Budha"
  },
  {
    label: "Mantra",
    house: {
      title: "Saturn (Shani) Mantra (शनि मंत्र) :",
      mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः ॥",
      translit: "Aum Pram Prim Pron seh Shanicharaye Namah",
      note: "*This mantra should be chanted for 23,000 times within 40 days"
    },
    karaka: {
      title: "Saturn (Shani) Mantra (शनि मंत्र) :",
      mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः ॥",
      translit: "Aum Pram Prim Pron seh Shanicharaye Namah",
      note: "*This mantra should be chanted for 23,000 times within 40 days"
    },
    houseFromKaraka: {
      title: "Mercury Mantra (बुध मंत्र) :",
      mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः ॥",
      translit: "Aum Bran Brin Bron seh Budhaye Namah",
      note: "*This mantra should be chanted for 9,000 times within 40 days"
    }
  },
  {
    label: "Donation",
    house: [
      "Saturn Donation",
      "More than 1kg Tila with Iron vessel.",
      "More than 5kg Tila.",
      "Dark blue cloth with Golden border.",
      "Food donation to homeless/beggars.",
      "Donation of steel utensils.",
      "Donate these articles on the day of your Janma Nakshatra or Saturday or Shani Hora."
    ],
    karaka: [
      "Saturn Donation",
      "More than 1kg Tila with Iron vessel.",
      "More than 5kg Tila.",
      "Dark blue cloth with Golden border.",
      "Food donation to homeless/beggars.",
      "Donation of steel utensils.",
      "Donate these articles on the day of your Janma Nakshatra or Saturday or Shani Hora."
    ],
    houseFromKaraka: [
      "Mercury Donation",
      "Yellow silk cloth with Gold Border.",
      "Vishnu Graha – Saligrama.",
      "Tulsi Mala.",
      "Tulsi Plant.",
      "Grantha Daan (Scriptures Donation).",
      "More than 11kg of Moong Daal.",
      "Vedic Grantha like Geeta.",
      "Donate these articles on the day of your Janma Nakshatra or Wednesday or Budha Hora."
    ]
  },
  {
    label: "Testing of Remedy : Vriksha Ropana",
    house: "Plant 2 plants or its multiples of खेजड़ी या शमी - Shami (Prosopis cineraria) on the time when moon or lagna in the Aquarius without affliction.",
    karaka: "Plant 8 plants or its multiples of खेजड़ी या शमी - Shami (Prosopis cineraria) on the day of your Janma Nakshatra or Saturday or Shani Hora.",
    houseFromKaraka: "Plant 2 plants or its multiples of कटहल - Panasa (Artocarpus integrifolia) on the time when moon or lagna in the Gemini without affliction."
  }
];

// Style objects
const cell = {
  border: "1.5px solid #222",
  fontSize: 12,
  padding: "4px 10px",
  textAlign: "center",
  fontFamily: "Segoe UI, Arial, sans-serif",
  fontWeight: 700,
  verticalAlign: "middle"
};
const orangeHeader = {
  ...cell,
  background: "#ff9933",
  color: "#222",
  fontWeight: 700,
  fontSize: 14,
};
const orangeLeft = {
  ...cell,
  background: "#ff9933",
  color: "#222",
  fontWeight: 700,
  fontSize: 14,
  textAlign: "center",
  width: 160
};
const sectionTitle = {
  fontSize: 32,
  fontWeight: 700,
  color: "#b35400",
  textAlign: "right",
  padding: "0 30px 0 0"
};
const greenCell = {
  ...cell,
  background: "#c6ef8c",
  color: "#222",
  fontWeight: 700
};
const redText = { color: "#d60000", fontWeight: 700 };
const blueText = { color: "#0047b3", fontWeight: 700 };
const blueBg = { background: "#003366", color: "#fff", fontWeight: 700, fontSize: 28, padding: "8px 18px", borderRadius: 3, width: 340, marginBottom: 10 };

// Helper functions
function parsePercentage(value) {
  if (typeof value === "string" && value.includes("%")) {
    return parseInt(value.replace("%", ""));
  }
  return 0;
}

function isMalefic(beneficMaleficRow, column) {
  const value = beneficMaleficRow[column];
  return value && value.className === "malefic";
}

function shouldApplyRedText(currentRowLabel, beneficMaleficRow, column) {
  const remedyLabels = ["Rudraksha / Herbs", "Yagya / Gems", "Mantra", "Donation"];
  return remedyLabels.includes(currentRowLabel) && isMalefic(beneficMaleficRow, column);
}

function shouldApplyBlueText(currentRowLabel, beneficMaleficRow, column) {
  return currentRowLabel === "Testing of Remedy : Vriksha Ropana" && isMalefic(beneficMaleficRow, column);
}

// Helper for rendering cell content with conditional styling
function renderCellContent(content, textStyle = {}) {
  const baseStyle = textStyle;
  
  if (typeof content === "string") return <span style={baseStyle}>{content}</span>;
  
  if (Array.isArray(content)) {
    return (
      <div style={{ textAlign: "left", ...baseStyle }}>
        <div style={{ color: "#d60000", fontWeight: 700 }}>{content[0]}</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {content.slice(1).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  if (content && content.title) {
    return (
      <div style={baseStyle}>
        <div style={{ color: "#d60000", fontWeight: 700 }}>{content.title}</div>
        <div style={{ fontWeight: 700, fontSize: 10 }}>{content.mantra}</div>
        <div>{content.translit}</div>
        <div style={{ color: "#d60000", fontWeight: 700, fontSize: 10, marginTop: 4 }}>{content.note}</div>
      </div>
    );
  }
  
  if (content && content.className === "malefic")
    return <span style={{ ...redText, fontSize: 18, ...baseStyle }}>{content.text}</span>;
  
  if (content && content.className === "benefic")
    return <span style={{ color: "#0047b3", fontWeight: 700, fontSize: 18, ...baseStyle }}>{content.text}</span>;
  
  return <span style={baseStyle}>{content?.text || ""}</span>;
}

const RemedyTable = () => {
  // Find the Benefic/Malefic row for reference
  const beneficMaleficRow = remedyData.find(row => row.label === "Benefic / Malefic");
  
  return (
    <div style={{ background: "#fff", padding: 0, marginTop: -60, marginBottom: 7, minWidth: 1650 }}>
      <div style={{ display: "flex", justifyContent: "right", gap: 40, alignItems: "center", marginBottom: 10 }}>
        <div style={blueBg}>
          <span>Job</span><span style={{ float: "right", fontSize: 28, fontWeight: 400 }}>&#9660;</span>
        </div>
        <div style={sectionTitle}>Remedies For Job</div>
      </div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead>
          <tr>
            <th style={orangeHeader}>Houses & Karaka</th>
            <th style={orangeHeader}>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <div style={{ borderBottom: "1.5px solid #222", paddingBottom: 6 }}>House</div>
                <div style={{ paddingTop: 6, fontWeight: 700, fontSize: 12 }}>6th House</div>
              </div>
            </th>
            <th style={orangeHeader}>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <div style={{ borderBottom: "1.5px solid #222", paddingBottom: 6 }}>Karaka</div>
                <div style={{ paddingTop: 6, fontWeight: 700, fontSize: 12 }}>Saturn</div>
              </div>
            </th>
            <th style={orangeHeader}>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <div style={{ borderBottom: "1.5px solid #222", paddingBottom: 6 }}>House from Karaka</div>
                <div style={{ paddingTop: 6, fontWeight: 700, fontSize: 12 }}>10th House</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {remedyData.slice(1).map((row, i) => {
            // Determine cell styles based on conditions
            const isGreenForHouse = row.label === "Free Will" && parsePercentage(row.house) > 50;
            const isGreenForKaraka = row.label === "Free Will" && parsePercentage(row.karaka) > 50;
            const isGreenForHouseFromKaraka = row.label === "Free Will" && parsePercentage(row.houseFromKaraka) > 50;
            
            // Determine text styles for remedy rows
            const houseTextStyle = shouldApplyRedText(row.label, beneficMaleficRow, "house") ? redText : 
                                   shouldApplyBlueText(row.label, beneficMaleficRow, "house") ? blueText : {};
            const karakaTextStyle = shouldApplyRedText(row.label, beneficMaleficRow, "karaka") ? redText :
                                    shouldApplyBlueText(row.label, beneficMaleficRow, "karaka") ? blueText : {};
            const houseFromKarakaTextStyle = shouldApplyRedText(row.label, beneficMaleficRow, "houseFromKaraka") ? redText :
                                             shouldApplyBlueText(row.label, beneficMaleficRow, "houseFromKaraka") ? blueText : {};
            
            return (
              <tr key={i}>
                <td style={orangeLeft}>{row.label}</td>
                <td style={isGreenForHouse ? greenCell : cell}>
                  {renderCellContent(row.house, houseTextStyle)}
                </td>
                <td style={isGreenForKaraka ? greenCell : cell}>
                  {renderCellContent(row.karaka, karakaTextStyle)}
                </td>
                <td style={isGreenForHouseFromKaraka ? greenCell : cell}>
                  {renderCellContent(row.houseFromKaraka, houseFromKarakaTextStyle)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RemedyTable;
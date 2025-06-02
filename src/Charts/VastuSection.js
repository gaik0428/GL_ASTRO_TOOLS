import React, { useState } from "react";
import './VastuSection.css';

const planets = [
  { name: "Sun", house: "9th House", sign: "Taurus", article: "Article Of The Planet Sun As Per Vastu", direction: "North West and West of North West", main: "Temple, Medicine, Lamp, Wooden Goods", exalt: "East and 1st part of East of South East", mool: "East of North East", own: "East of North East" }
  // Add more planets as needed
];

const VastuSection = () => {
  const [selected, setSelected] = useState(planets[0]);

  return (
    <div className='vastu-section-grid'>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 0 }}>
        <thead>
            <tr>
                <th style={{ border: "2px solid #222", textAlign: "left" }} colSpan={5}>
                    <select
                        style={{ fontSize: 18, fontWeight: 700, background: "#003366", color: "#fff", paddingTop: 5, paddingBottom: 5, paddingRight: 300, margin: 4 }}
                        value={selected.name}
                        onChange={e => setSelected(planets.find(p => p.name === e.target.value))}
                    >
        {planets.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
      </select>
                </th>
            </tr>
            <tr>
                <th style={{ border: "2px solid #222", padding: 6 }} colSpan={3}></th>
                <th style={{ background: "#003366", color: "#fff", border: "2px solid #222", padding: 6 }} colSpan={2}>Vastu Direction of the Rashi</th>
            </tr>

        </thead>
        <tbody>
            <tr style={{ textAlign: "center", fontWeight: 700 }}>
                <td style={{ background: "#337ab7", border: "2px solid #222", padding: 6 }}>Planets</td>
                <td style={{ border: "2px solid #222", padding: 6 }}>{selected.name}</td>
                <td style={{ border: "2px solid #222", padding: 6 }}>{selected.sign}</td>
                <td style={{ border: "2px solid #222", fontSize: 24 }} rowSpan={2} colSpan={2}>
                    {selected.direction}
                </td>
            </tr>
            <tr style={{ textAlign: "center", fontWeight: 700 }}>
            <td style={{ background: "#337ab7", border: "2px solid #222", padding: 6 }}>House</td>
            <td style={{ border: "2px solid #222", padding: 6 }}>{selected.house}</td>
            <td style={{ border: "2px solid #222", padding: 6 }}>Enemy Sign</td>
            </tr>

            <tr>
                <td colSpan={5} style={{ paddingTop: 5, paddingBottom: 3, background: "yellow", color: "red", fontWeight: 700, textAlign: "center", border: "2px solid #222" }}>
                {selected.article}
                <select style={{ float: "right", fontSize: 16, padding: 4, marginRight: 4 }}>
                    <option>English</option>
                    {/* Add other languages */}
                </select>
                </td>
            </tr>
            <tr>
                <td colSpan={5} style={{ textAlign: "center", fontWeight: 700, fontSize: 32, padding: 50, border: "2px solid #222" }}>
                {selected.main}
                </td>
            </tr>
        </tbody>
      </table>
      <table style={{ marginTop: 20, borderCollapse: "collapse", width: "60%", fontWeight: 700}}>
        <tbody>
          <tr>
            <td style={{ border: "2px solid #222", padding: 6 }}>Exaltation Vastu Direction</td>
            <td style={{ border: "2px solid #222", padding: 6 }}>{selected.exalt}</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid #222", padding: 6 }}>Mool-trikona Vastu Direction</td>
            <td style={{ border: "2px solid #222", padding: 6 }}>{selected.mool}</td>
          </tr>
          <tr>
            <td style={{ border: "2px solid #222", padding: 6 }}>Own Sign Vastu Direction</td>
            <td style={{ border: "2px solid #222", padding: 6 }}>{selected.own}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VastuSection;
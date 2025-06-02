import React, { useState } from 'react';
import Charts from "./Charts";
import './ArudhaSection.css';

const ArudhaSection = () => {
    const [arudhaNo, setArudhaNo] = useState("");

    return (
        <div className="arudha-section-root" style={{ background: "#fff", marginBottom: 80 }}>
            <div className="arudha-section-flex" style={{ display: "flex", justifyContent: "center", textAlign: 'center', gap: 40 }}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Arudha No."
                        value={arudhaNo}
                        onChange={e => setArudhaNo(e.target.value)}
                        className="arudha-section-input"
                        style={{
                            fontSize: 24,
                            borderRadius: 12,
                            border: "4px solid #00b0f0",
                            padding: "12px 16px",
                            textAlign: "center",
                            fontWeight: 500,
                            color: "#444",
                            outline: "none",
                            marginBottom: 18,
                            boxShadow: "0 2px 8px #eee",
                            width: "100%",
                            maxWidth: 320,
                            boxSizing: "border-box"
                        }}
                    />
                    <div>
                        <Charts />
                    </div>
                </div>
                {/* Info Table */}
                <div className="arudha-section-info-table" style={{ display: "flex", justifyContent: "center", marginTop: 200, marginLeft: 10, textAlign: "left" }}>
                    <table style={{ fontSize: 24, fontWeight: 700, color: "#222", borderSpacing: 0 }}>
                        <tbody>
                            <tr>
                                <td style={{ verticalAlign: "top", padding: 0 }}>
                                    <div>
                                        <div style={{ marginBottom: 6 }}>
                                            <span style={{ paddingRight: 8 }}>Tithi:</span>
                                            <span style={{ fontWeight: 700 }}>Krishna Chaturthi (Bu)</span> (4.45% left)
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            <span style={{ paddingRight: 8 }}>Weekday:</span>
                                            <span style={{ fontWeight: 700 }}>Tuesday (Ma)</span>
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            <span style={{ paddingRight: 8 }}>Nakshatra:</span>
                                            <span style={{ fontWeight: 700 }}>Aasresha</span> (Bu) (28.20% left)
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            <span style={{ paddingRight: 8 }}>Yoga:</span>
                                            <span style={{ fontWeight: 700 }}>Vishkambha</span> (Sa) (62.39% left)
                                        </div>
                                        <div style={{ marginBottom: 6 }}>
                                            <span style={{ paddingRight: 8 }}>Karana:</span>
                                            <span style={{ fontWeight: 700 }}>Balava</span> (Ch) (8.90% left)
                                        </div>
                                        <div>
                                            <span style={{ paddingRight: 8 }}>Hora Lord:</span>
                                            <span style={{ fontWeight: 700 }}>Chandra</span> (48.26% left)
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ArudhaSection;
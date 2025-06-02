import React from 'react';
import './TimingSection.css';

const timingData = [
  { planet: 'Sun', time: '3.5 Year' },
  { planet: 'Moon', time: '1:36 Min.' },
  { planet: 'Mars', time: '8 Days' },
  { planet: 'Mercury', time: '6 Month' },
  { planet: 'Jupiter', time: '6 Month' },
  { planet: 'Venus', time: '2.5 Month' },
  { planet: 'Saturn', time: '9 Year' },
];

const TimingSection = () => (
  <div className="timing-section-root">
    {/* Timing Method 1 */}
    <div className="timing-section-method">
      <div style={{
        background: '#8ed973',
        color: '#111',
        fontWeight: 'bold',
        fontSize: 32,
        borderRadius: 16,
        padding: '12px 32px',
        textAlign: 'center',
        marginBottom: 16,
        border: '2px solid #222',
        width: 340,
        maxWidth: '100%'
      }}>
        TIMING METHOD 1
      </div>
      <table style={{
        borderCollapse: 'collapse',
        width: 340,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        maxWidth: '100%'
      }}>
        <thead>
          <tr>
            <th style={{
              background: '#0074d9',
              color: 'white',
              padding: '10px',
              border: '2px solid #222'
            }}>Planets</th>
            <th style={{
              background: '#0074d9',
              color: 'white',
              padding: '10px',
              border: '2px solid #222'
            }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {timingData.map(row => (
            <tr key={row.planet}>
              <td style={{
                background: '#0074d9',
                color: 'white',
                padding: '10px',
                border: '2px solid #222'
              }}>{row.planet}</td>
              <td style={{
                background: 'white',
                color: '#222',
                padding: '10px',
                border: '2px solid #222'
              }}>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* Timing Method 2 */}
    <div className="timing-section-method">
      <div style={{
        background: '#8ed973',
        color: '#111',
        fontWeight: 'bold',
        fontSize: 32,
        borderRadius: 16,
        padding: '12px 32px',
        textAlign: 'center',
        marginBottom: 16,
        border: '2px solid #222',
        width: 340,
        maxWidth: '100%'
      }}>
        TIMING METHOD 2
      </div>
      {/* You can add a table or content for Timing Method 2 here */}
    </div>
  </div>
);

export default TimingSection;
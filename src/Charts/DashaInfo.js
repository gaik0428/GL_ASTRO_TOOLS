import React, { useState } from 'react';
import DashaContextMenu from '../Form/DashaContextMenu';

const DashaInfo = () => {
  const [menu, setMenu] = useState(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const handleCloseMenu = () => setMenu(null);

  return (
    <div
      style={{ fontFamily: 'Segoe UI, Arial, sans-serif', background: '#fff', padding: 50, maxWidth: 800 }}
      onContextMenu={handleContextMenu}
    >
      {/* Header Navigation */}
      <div style={{ display: 'flex', gap: 18, marginBottom: 16, alignItems: 'center',marginLeft: 120}}>
        <div style={{
          background: '#f18736',
          color: '#fff',
          fontWeight: 700,
          fontSize: 22,
          borderRadius: 10,
          padding: '12px 32px',
          boxSizing: 'border-box',
          lineHeight: 1.1,
          boxShadow: '0 2px 8px #f1873622',
          textAlign: 'center',
        }}>
          Nakshatra<br />Dashas
        </div>
        <div style={{
          color: '#f18736',
          fontWeight: 700,
          fontSize: 22,
          marginLeft: 8
        }}>
          Rashi<br />Dashas
        </div>
        <div style={{
          color: '#f18736',
          fontWeight: 700,
          fontSize: 22,
          marginLeft: 8
        }}>
          Other<br />Dashas
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Vimsottari Dasha Title */}
        <div style={{ color: '#0a186a', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          Vimsottari Dasha:
        </div>

        {/* Main Dasha Periods */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#222', marginBottom: 2 }}>
            <span style={{ color: '#ff2222', fontWeight: 700 }}>Sury MD:</span>
            <span style={{ marginLeft: 8 }}>2048-Apr-21 (17:09:06) - 2054-Apr-22 (6:01:16)</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#222', marginBottom: 2, marginLeft: 50 }}>
            <span style={{ color: '#ff2222', fontWeight: 700 }}>Chan AD:</span>
            <span style={{ marginLeft: 8 }}>2048-Aug-12 (7:15:37) - 2049-Feb-08 (15:10:43)</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#222', marginLeft: 100 }}>
            <span style={{ color: '#ff2222', fontWeight: 700 }}>Mang PD:</span>
            <span style={{ marginLeft: 8 }}>2048-Aug-27 (21:21:41) - 2048-Sep-07 (17:40:38)</span>
          </div>
        </div>

        {/* Sookshma-antardasahs Section */}
        <div>
          <div style={{ color: '#0a186a', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
            Sookshma-antardasahs in this PD:
          </div>
          <div style={{ marginLeft: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Mang: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Aug-27 (21:21:41) - 2048-Aug-18 (12:35:17)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Rah: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Aug-18 (12:35:17) - 2048-Aug-30 (3:43:09)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Guru: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Aug-30 (3:43:09) - 2048-Aug-31 (14:18:18)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Sani: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Aug-31 (14:18:18) - 2048-Sep-02 (7:42:36)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Budh: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Sep-02 (7:42:36) - 2048-Sep-03 (20:34:22)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Ket: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Sep-03 (20:34:22) - 2048-Sep-04 (11:44:33)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Sukr: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Sep-04 (11:44:33) - 2048-Sep-06 (7:03:23)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Sury: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Sep-06 (7:03:23) - 2048-Sep-06 (20:02:32)</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff2222', marginBottom: 2 }}>
              Chan: <span style={{ color: '#222', fontWeight: 700, marginLeft: 8 }}>2048-Sep-06 (20:02:32) - 2048-Sep-07 (17:40:38)</span>
            </div>
          </div>
        </div>
      </div>

      {menu && (
        <DashaContextMenu x={menu.x} y={menu.y} onClose={handleCloseMenu} />
      )}
    </div>
  );
};

export default DashaInfo;
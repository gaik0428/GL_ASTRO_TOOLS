import React, { useState } from 'react';
import DashaContextMenu from '../Form/DashaContextMenu';
import './DashaInfo.css';

const DashaInfo = () => {
  const [menu, setMenu] = useState(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const handleCloseMenu = () => setMenu(null);

  return (
    <div
      className="dasha-info-root"
      onContextMenu={handleContextMenu}
    >
      {/* Header Navigation */}
      <div className="dasha-header-nav">
        <div className="nav-item active">
          Nakshatra<br />Dashas
        </div>
        <div className="nav-item">
          Rashi<br />Dashas
        </div>
        <div className="nav-item">
          Other<br />Dashas
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Vimsottari Dasha Title */}
        <div className="dasha-main-title">
          Vimsottari Dasha:
        </div>

        {/* Main Dasha Periods */}
        <div style={{ marginBottom: 20 }}>
          <div className="dasha-period">
            <span className="label">Sury MD:</span>
            <span style={{ marginLeft: 8 }}>2048-Apr-21 (17:09:06) - 2054-Apr-22 (6:01:16)</span>
          </div>
          <div className="dasha-period ad">
            <span className="label">Chan AD:</span>
            <span style={{ marginLeft: 8 }}>2048-Aug-12 (7:15:37) - 2049-Feb-08 (15:10:43)</span>
          </div>
          <div className="dasha-period pd">
            <span className="label">Mang PD:</span>
            <span style={{ marginLeft: 8 }}>2048-Aug-27 (21:21:41) - 2048-Sep-07 (17:40:38)</span>
          </div>
        </div>

        {/* Sookshma-antardasahs Section */}
        <div>
          <div className="dasha-sookshma-title">
            Sookshma-antardasahs in this PD:
          </div>
          <div className="dasha-sookshma-list">
            <div className="dasha-sookshma-item">
              Mang: <span className="value">2048-Aug-27 (21:21:41) - 2048-Aug-18 (12:35:17)</span>
            </div>
            <div className="dasha-sookshma-item">
              Rah: <span className="value">2048-Aug-18 (12:35:17) - 2048-Aug-30 (3:43:09)</span>
            </div>
            <div className="dasha-sookshma-item">
              Guru: <span className="value">2048-Aug-30 (3:43:09) - 2048-Aug-31 (14:18:18)</span>
            </div>
            <div className="dasha-sookshma-item">
              Sani: <span className="value">2048-Aug-31 (14:18:18) - 2048-Sep-02 (7:42:36)</span>
            </div>
            <div className="dasha-sookshma-item">
              Budh: <span className="value">2048-Sep-02 (7:42:36) - 2048-Sep-03 (20:34:22)</span>
            </div>
            <div className="dasha-sookshma-item">
              Ket: <span className="value">2048-Sep-03 (20:34:22) - 2048-Sep-04 (11:44:33)</span>
            </div>
            <div className="dasha-sookshma-item">
              Sukr: <span className="value">2048-Sep-04 (11:44:33) - 2048-Sep-06 (7:03:23)</span>
            </div>
            <div className="dasha-sookshma-item">
              Sury: <span className="value">2048-Sep-06 (7:03:23) - 2048-Sep-06 (20:02:32)</span>
            </div>
            <div className="dasha-sookshma-item">
              Chan: <span className="value">2048-Sep-06 (20:02:32) - 2048-Sep-07 (17:40:38)</span>
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
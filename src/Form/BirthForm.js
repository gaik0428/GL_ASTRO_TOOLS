import React, { useState } from 'react';
import './BirthForm.css';

function BirthForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    calendar: 'Gregorian',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    birthHour: '',
    birthMinute: '',
    birthSecond: '',
    amPm: '',
    birthCity: '',
    birthState: '',
    birthCountry: '',
    elevation: '0',
    latitudeDegrees: '',
    latitudeMinutes: '',
    latitudeSeconds: '',
    latitudeDirection: '',
    longitudeDegrees: '',
    longitudeMinutes: '',
    longitudeSeconds: '',
    longitudeDirection: '',
    timeZone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      gender: '',
      calendar: 'Gregorian',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      birthHour: '',
      birthMinute: '',
      birthSecond: '',
      amPm: 'AM',
      birthCity: '',
      birthState: '',
      birthCountry: '',
      elevation: '0',
      latitudeDegrees: '',
      latitudeMinutes: '',
      latitudeSeconds: '',
      latitudeDirection: 'Select',
      longitudeDegrees: '',
      longitudeMinutes: '',
      longitudeSeconds: '',
      longitudeDirection: 'Select',
      timeZone: ''
    });
  };
  
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const handleOverlayClick = (e) => {
    // Only close if the user clicked directly on the overlay (not the form or its children)
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="overlay-form">
            <div className="birth-form-container">
            <div className="form-header">
            <img
            src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/birth.png`}
            alt="Birth"
            className="baby-icon"
            style={{ width: 50, height: 50, marginRight: 6, verticalAlign: 'middle' }}
            />

                <h2 style={{ fontWeight: 700 }}>Birth Data</h2>
            </div>

            <div className="form-content">
                {/* Name Section */}
                <div className="form-row">
                <div className="form-group">
                    <label className="field-label">
                    <span className="person-icon">👤</span>
                    Name
                    </label>
                    <input
                    type="text"
                    className="form-input name-input"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <button className="help-icon">?</button>
                </div>
                </div>

                {/* Gender Section */}
                <div className="form-row with-line">
                <div className="form-group">
                    <label className="field-label">Gender</label>
                    <div className="gender-buttons">
                    <button
                        className={`gender-btn ${formData.gender === 'Male' ? 'active' : ''}`}
                        onClick={() => handleInputChange('gender', 'Male')}
                    >
                        Male
                    </button>
                    <button
                        className={`gender-btn ${formData.gender === 'Female' ? 'active' : ''}`}
                        onClick={() => handleInputChange('gender', 'Female')}
                    >
                        Female
                    </button>
                    </div>
                    <button className="help-icon">?</button>
                </div>
                </div>

                {/* Calendar Section */}
                <div className="calendar-section">
                <div className="calendar-options">
                    <label className="radio-option">
                    <input
                        type="radio"
                        name="calendar"
                        value="Gregorian"
                        checked={formData.calendar === 'Gregorian'}
                        onChange={(e) => handleInputChange('calendar', e.target.value)}
                    />
                    <span className="radio-label" style={{fontSize: '14px', fontWeight: 700}}>Gregorian</span>
                    </label>
                    <label className="radio-option">
                    <input
                        type="radio"
                        name="calendar"
                        value="Julian"
                        checked={formData.calendar === 'Julian'}
                        onChange={(e) => handleInputChange('calendar', e.target.value)}
                    />
                    <span className="radio-label" style={{fontSize: '14px', fontWeight: 700}}>Julian</span>
                    </label>
                </div>
                </div>

                {/* Birth Date Section */}
                <div className="form-row">
                <div className="form-group">
                    <label className="field-label">
                    <span className="calendar-icon">🗓️</span>
                    Birth date
                    </label>
                    <div className="date-inputs">
                    <input
                        type="text"
                        className="form-input date-input"
                        placeholder="Month"
                        value={formData.birthMonth}
                        onChange={(e) => handleInputChange('birthMonth', e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-input date-input"
                        placeholder="DD"
                        value={formData.birthDay}
                        onChange={(e) => handleInputChange('birthDay', e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-input date-input"
                        placeholder="YYYY"
                        value={formData.birthYear}
                        onChange={(e) => handleInputChange('birthYear', e.target.value)}
                    />
                    </div>
                    <button className="help-icon">?</button>
                </div>
                </div>

                {/* Birth Time Section */}
                <div className="form-row with-line">
                <div className="form-group">
                    <label className="field-label">
                    <span className="clock-icon">🕰️</span>
                    Birth Time
                    </label>
                    <div className="time-inputs">
                    <input
                        type="integer"
                        className="form-input time-input"
                        placeholder="HH"
                        value={formData.birthHour}
                        onChange={(e) => handleInputChange('birthHour', e.target.value)}
                    />
                    <input
                        type="integer"
                        className="form-input time-input"
                        placeholder="MM"
                        value={formData.birthMinute}
                        onChange={(e) => handleInputChange('birthMinute', e.target.value)}
                    />
                    <input
                        type="integer"
                        className="form-input time-input"
                        placeholder="SS"
                        value={formData.birthSecond}
                        onChange={(e) => handleInputChange('birthSecond', e.target.value)}
                    />
                    <input
                        className="form-select ampm-select"
                        type='text'
                        placeholder='AM'
                        value={formData.amPm}
                        onChange={(e) => handleInputChange('amPm', e.target.value)}
                    >
                    </input>
                    </div>
                    <button className="help-icon">?</button>
                </div>
                </div>

                {/* Birth Location Section */}
                <div className="form-row">
                <div className="form-group">
                    <label className="field-label">
                    <span className="location-icon">📌</span>
                    Birth City
                    </label>
                    <input
                    type="text"
                    className="form-input location-input"
                    placeholder="Enter City Name"
                    value={formData.birthCity}
                    onChange={(e) => handleInputChange('birthCity', e.target.value)}
                    />
                    <button className="help-icon">?</button>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group">
                    <label className="field-label">Birth State</label>
                    <input
                    type="text"
                    className="form-input location-input"
                    placeholder="Enter State Name"
                    value={formData.birthState}
                    onChange={(e) => handleInputChange('birthState', e.target.value)}
                    />
                    <button className="help-icon">?</button>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group">
                    <label className="field-label">Birth Country</label>
                    <input
                    type="text"
                    className="form-input location-input"
                    placeholder="Enter Country Name"
                    value={formData.birthCountry}
                    onChange={(e) => handleInputChange('birthCountry', e.target.value)}
                    />
                    <button className="help-icon">?</button>
                </div>
                </div>

                <div className="advanced-options with-line">
                <button
                    className="advanced-btn"
                    type="button"
                    onClick={() => setShowAdvanced((prev) => !prev)}
                >
                    Advanced Options / Custom Location
                </button>
                </div>

                {showAdvanced && (
                    <>

                        {/* Elevation Section */}
                        <div className="form-row">
                        <div className="form-group">
                            <label className="field-label">Elevation</label>
                            <input
                            type="integer"
                            className="form-input elevation-input"
                            value={formData.elevation}
                            onChange={(e) => handleInputChange('elevation', e.target.value)}
                            />
                            <button className="help-icon">?</button>
                        </div>
                        </div>

                        {/* Latitude Section */}
                        <div className="form-row">
                        <div className="form-group">
                            <label className="field-label">Latitude</label>
                            <div className="coordinate-inputs">
                            <input
                                type="number"
                                className="form-input coord-input"
                                placeholder="DD"
                                value={formData.latitudeDegrees}
                                onChange={(e) => handleInputChange('latitudeDegrees', e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-input coord-input"
                                placeholder="MM"
                                value={formData.latitudeMinutes}
                                onChange={(e) => handleInputChange('latitudeMinutes', e.target.value)}
                            />
                            <input
                                type="numbwe"
                                className="form-input coord-input"
                                placeholder="SS"
                                value={formData.latitudeSeconds}
                                onChange={(e) => handleInputChange('latitudeSeconds', e.target.value)}
                            />
                            <input
                                className="form-select direction-select"
                                type='text'
                                value={formData.latitudeDirection}
                                placeholder='Select'
                                onChange={(e) => handleInputChange('latitudeDirection', e.target.value)}
                            >
                            </input>
                            </div>
                            <button className="help-icon">?</button>
                        </div>
                        </div>

                        {/* Longitude Section */}
                        <div className="form-row with-line">
                        <div className="form-group">
                            <label className="field-label">Longitude</label>
                            <div className="coordinate-inputs">
                            <input
                                type="number"
                                className="form-input coord-input"
                                placeholder="DD"
                                value={formData.longitudeDegrees}
                                onChange={(e) => handleInputChange('longitudeDegrees', e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-input coord-input"
                                placeholder="MM"
                                value={formData.longitudeMinutes}
                                onChange={(e) => handleInputChange('longitudeMinutes', e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-input coord-input"
                                placeholder="SS"
                                value={formData.longitudeSeconds}
                                onChange={(e) => handleInputChange('longitudeSeconds', e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-select direction-select"
                                placeholder="Select"
                                value={formData.longitudeDirection}
                                onChange={(e) => handleInputChange('longitudeDirection', e.target.value)}
                            >
                            </input>
                            </div>
                            <button className="help-icon">?</button>
                        </div>
                        </div>

                        {/* Time Zone Section */}
                        <div className="form-row with-line">
                        <div className="form-group">
                            <label className="field-label">Time Zone</label>
                            <div className="timezone-inputs">
                            <input
                                type="text"
                                className="form-input timezone-input"
                                placeholder="Select Time Zone"
                                value={formData.timeZone}
                                onChange={(e) => handleInputChange('timeZone', e.target.value)}
                            />
                            <button className="timezone-btn">East of GMT</button>
                            </div>
                            <button className="help-icon">?</button>
                        </div>
                        </div>
                    </>
                )}

                {/* Action Buttons */}
                <div className="form-actions">
                <button className="action-btn clear-btn" onClick={handleClear}>
                    CLEAR
                </button>
                <button className="action-btn submit-btn" onClick={handleSubmit}>
                    SUBMIT
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default BirthForm;
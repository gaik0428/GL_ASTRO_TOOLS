import React from 'react';
import './PlanetsTable.css';

const PlanetsTable = () => {
  const planetsData = [
    { 
      planet: "Ascendant", 
      longitude: "04° Cap 24' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "1st House", 
      status: "-",
      statusClass: "neutral"
    },
    { 
      planet: "Sun", 
      longitude: "03° Ari 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "4th House", 
      status: "Exaltation",
      statusClass: "exalted"
    },
    { 
      planet: "Moon", 
      longitude: "26° Sco 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "11th House", 
      status: "Debilitation",
      statusClass: "debilitated"
    },
    { 
      planet: "Mars", 
      longitude: "05° Can 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "7th House", 
      status: "Debilitation",
      statusClass: "debilitated"
    },
    { 
      planet: "Mercury", 
      longitude: "06° Pis 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "3rd House", 
      status: "Debilitation",
      statusClass: "debilitated"
    },
    { 
      planet: "Jupitor", 
      longitude: "24° Tau 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "5th House", 
      status: "Enemy Sign",
      statusClass: "neutral"
    },
    { 
      planet: "Venus", 
      longitude: "00° Pis 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "3rd House", 
      status: "Exaltation",
      statusClass: "exalted"
    },
    { 
      planet: "Saturn", 
      longitude: "02° Pis 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "3rd House", 
      status: "Friendly Sign",
      statusClass: "neutral"
    },
    { 
      planet: "Rahu", 
      longitude: "02° Pis 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "3rd House", 
      status: "-",
      statusClass: "neutral"
    },
    { 
      planet: "Ketu", 
      longitude: "02° Vir 25' 27\"", 
      nakshatra: "Ashwini 2", 
      house: "9th House", 
      status: "-",
      statusClass: "neutral"
    }
  ];

  return (
    <div className="planets-table-container">
      <table className="planets-table">
        <thead>
          <tr>
            <th>Planets</th>
            <th>Longitude</th>
            <th>Nakshatra</th>
            <th>House</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {planetsData.map((row, index) => (
            <tr key={index}>
            <td
                className={
                row.status === "Exaltation"
                    ? "exalted"
                    : row.status === "Debilitation"
                    ? "debilitated"
                    : ""
                }
                id="planet_name"
            >
                {row.planet}
            </td>
            <td>{row.longitude}</td>
            <td>{row.nakshatra}</td>
            <td>{row.house}</td>
            <td 
                className={
                row.status === "Exaltation"
                    ? "exalted"
                    : row.status === "Debilitation"
                    ? "debilitated"
                    : ""
                }
                id="planet_status">{row.status}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetsTable;
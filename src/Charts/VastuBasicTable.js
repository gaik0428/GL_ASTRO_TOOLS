import React from 'react';
import './PlanetsTable.css';

const VastuBasicTable = () => {
  const planetsData = [
    { 
      planet: "Ascendant", 
      longitude: "04° Cap 24' 27\"",
      house: "1st House", 
      status: "-",
      vastuDirection: "-",
      statusClass: "neutral"
    },
    { 
      planet: "Sun", 
      longitude: "03° Ari 25' 27\"", 
      house: "4th House", 
      status: "Exaltation",
      vastuDirection: "North West and West of North West",
      statusClass: "exalted"
    },
    { 
      planet: "Moon", 
      longitude: "26° Sco 25' 27\"",
      house: "11th House", 
      status: "Debilitation",
      vastuDirection: "North of North East",
      statusClass: "debilitated"
    },
    { 
      planet: "Mars", 
      longitude: "05° Can 25' 27\"", 
      house: "7th House", 
      status: "Debilitation",
      vastuDirection: "South of South East and South and South West",
      statusClass: "debilitated"
    },
    { 
      planet: "Mercury", 
      longitude: "06° Pis 25' 27\"",
      house: "3rd House", 
      status: "Debilitation",
      vastuDirection: "East and 1st part of East of South East",
      statusClass: "debilitated"
    },
    { 
      planet: "Jupitor", 
      longitude: "24° Tau 25' 27\"",
      house: "5th House", 
      status: "Enemy Sign",
      vastuDirection: "South of South West",
      statusClass: "neutral"
    },
    { 
      planet: "Venus", 
      longitude: "00° Pis 25' 27\"",
      house: "3rd House", 
      status: "Exaltation",
      vastuDirection: "East and 1st part of East of South East",
      statusClass: "exalted"
    },
    { 
      planet: "Saturn", 
      longitude: "02° Pis 25' 27\"",
      house: "3rd House", 
      status: "Friendly Sign",
      vastuDirection: "North West and West of North West",
      statusClass: "neutral"
    },
    { 
      planet: "Rahu", 
      longitude: "02° Pis 25' 27\"", 
      house: "3rd House", 
      status: "-",
      vastuDirection: "South of South East and South and South West",
      statusClass: "neutral"
    },
    { 
      planet: "Ketu", 
      longitude: "02° Vir 25' 27\"",
      house: "9th House", 
      status: "-",
      vastuDirection: "North of North East",
      statusClass: "neutral"
    }
  ];

  return (
    <div className="planets-table-container" style={{ marginTop: '110px', marginBottom: '80px', width: '95%' }}>
      <table className="planets-table">
        <thead>
          <tr>
            <th>Planets</th>
            <th>Longitude</th>
            <th>House</th>
            <th>Status</th>
            <th>Vastu Direction</th>
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
            <td 
                className={
                row.status === "Exaltation"
                    ? "exalted"
                    : row.status === "Debilitation"
                    ? "debilitated"
                    : ""
                }
                id="planet_status">{row.vastuDirection}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default VastuBasicTable;
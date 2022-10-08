import { useState } from 'react';

import json from './data.json';
import './app.css';

function App() {
  const [data, setData] = useState(json);

  const getPercentage = (currentYear, salaries) => {
    const years = Object.keys(salaries);
    if (years.length < 2) return;
    if (!years.includes(currentYear)) return;
    const lastYear = years[years.indexOf(currentYear) - 1];
    const percentage = (
      (salaries[currentYear] / salaries[lastYear] - 1) *
      100
    ).toFixed(2);
    return `+${percentage}%`;
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setData(
      json.filter(
        (obj) =>
          obj.firstName.toLowerCase().includes(query) ||
          obj.lastName.toLowerCase().includes(query) ||
          obj.roles.join().toLowerCase().includes(query)
      )
    );
  };

  return (
    <>
      <div className="filter-container">
        <div></div>
        <input
          className="search"
          placeholder="Efternamn | Förnamn | Roller"
          onChange={handleSearchChange}
        ></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>Efternamn</th>
            <th>Förnamn</th>
            <th>2020</th>
            <th>2021</th>
            <th>Roller</th>
            <th>Applikationsenhet</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, i) => (
            <tr key={i}>
              <td>{person.lastName}</td>
              <td>{person.firstName}</td>
              <td>{person.salaries[2020] || '-'}</td>
              <td>
                {person.salaries[2021] || '-'}
                {getPercentage('2021', person.salaries) && (
                  <span className="percentage">
                    {getPercentage('2021', person.salaries)}
                  </span>
                )}
              </td>
              <td>{person.roles.join(', ')}</td>
              <td>{person.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

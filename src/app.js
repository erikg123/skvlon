import data from './data.json';
import './app.css';

function App() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Efternamn</th>
          <th>Förnamn</th>
          <th>2020</th>
          <th>2021</th>
          <th>Roller</th>
          <th>Avdelning</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, i) => (
          <tr key={i}>
            <td>{person.lastName}</td>
            <td>{person.firstName}</td>
            <td>{person.salaries[2020] || '-'}</td>
            <td>{person.salaries[2021] || '-'}</td>
            <td>{person.roles.join(', ')}</td>
            <td>{person.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

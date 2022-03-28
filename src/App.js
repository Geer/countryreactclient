import logo from './logo.svg';
import './App.css';
import Autocomplete from './autocomplete';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Proof of concept</h1></div>
        <p>This is a MUI autocomplete element that takes info from an API developed in Springboot which retrieves information of towns, 
          cities, counties, states and countries.</p>
        <p>You just need to type 4 letters of any location and it will be finded into a database and returns all the path to get there in 
          the format town, city, county, state, country</p>
      <Autocomplete></Autocomplete>
    </div>
  );
}

export default App;

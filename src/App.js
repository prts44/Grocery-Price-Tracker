import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import Card from './components/Card.js';
import Details from './pages/Details.js';
import Graph from './components/Graph.js';

function App() {
  return (
    <div className="App">
        <div>
            <SearchBar />
            <Card />
            <Card />
        </div>
        <Details />
        <Graph />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import Card from './components/Card.js';
import Details from './pages/Details.js';

function App() {
  return (
    <div className="App">
        <div>
            <SearchBar />
            <Card />
            <Card />
        </div>
        <Details />
    </div>
  );
}

export default App;

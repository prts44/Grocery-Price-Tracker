import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
        <div>
            <SearchBar />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default App;

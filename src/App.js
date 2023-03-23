import logo from './logo.svg';
import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import SingleItem from './components/ItemTile/SingleItem';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <FoodTileContainer/>
      <SingleItem/>
    </div>
  );
}

export default App;

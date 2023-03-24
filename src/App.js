import logo from './logo.svg';
import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import ItemTileContainer from './components/ItemTile/ItemTileContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <div className='main'>
      <FoodTileContainer/>
      <ItemTileContainer/>
      </div>
    </div>
  );
}

export default App;

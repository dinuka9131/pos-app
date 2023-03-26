import logo from './logo.svg';
import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import ItemTileContainer from './components/ItemTile/ItemTileContainer';
import PaymentBox from './components/Payment/PaymentBox';
import OrderListContainer from './components/OrderList/OrderListContainer';
import CartItemContainer from './components/Cart/CartItemContainer';
import LeftPanel from './components/LeftPanel/LeftPanel';
import DashBoardTile from './components/DashBoard/DashBoardTile';
import DashBoardContainer from './components/DashBoard/DashBoardContainer';
import MiddlePanel from './components/Middle Panel/MiddlePanel';
import RightPanel from './components/RightPanel/RightPanel';

function App() {
  return (
    <div className="App">
      <LeftPanel/>
      <MiddlePanel/>
      <RightPanel/>
      {/* <UpperNavBar/>
      {/* <div className='main'>
      <FoodTileContainer/>
      <ItemTileContainer/>
      </div> */}
      {/* <CartItemContainer/> */}
      {/* <PaymentBox/> */}
    </div>
  );
}

export default App;

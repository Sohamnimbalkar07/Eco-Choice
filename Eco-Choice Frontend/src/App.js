import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import './App.css';

import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import NavBar from './components/NavBar';
import Admin from './components/Admin';
import ProductForm from './components/ProductForm';
import FarmerWelcome from './components/FarmerWelcome';
import updateProduct from './components/UpdateProduct';
import FarmerviewProduct from './components/FarmerviewProduct';
import About from './components/About';
import Customer from './components/Customer';
import AdminWelcome from './components/AdminWelcome';
// import CustomerWelcome from './components/CustomerWelcome';
import ViewProduct from './components/viewProduct';
//import ViewOrder from './components/ViewCartPr';
import TestViewOrder from './components/TestViewOrder';
import PlaceOrder from './components/PlaceOrder';
import PlaceOrderFromCart from './components/PlaceOrderFromCart';
import HomePage from './components/HomePage';
import OrderDetails from './components/OrderDetails';
import Payment from './components/Payment';
import forgotPassword from './components/ForgotPassword';
import EnterOtp from './components/EnterOtp';
import ResetPassword from './components/ResetPassword';
function App() {
  return (
    <>
    <div className="App">
     
    <NavBar/>
     
      <Routes>
      <Route path='/HomePage' Component={HomePage}></Route>
      <Route path='/About' Component={About}></Route>
      <Route path='/Login' Component={Login}></Route>
      <Route path='/RegistrationForm' Component={RegistrationForm}></Route>
      <Route path='/Admin' Component={Admin}></Route> 
      <Route path='/Farmer' Component={ProductForm}></Route>
      <Route path='/FarmerWelcome' Component={FarmerWelcome}></Route>
      <Route path='/updateProduct/:productId'Component={updateProduct}></Route>
      <Route path='/FarmerviewProduct'Component={FarmerviewProduct}></Route>
      <Route path='/Customer' Component={Customer}></Route>
      <Route path='/Login'Component={AdminWelcome}></Route>
      {/* <Route path='/CustomerWelcome'Component={CustomerWelcome}></Route> */}
      <Route path='/viewProduct'Component={ViewProduct}></Route>
      {/* <Route path='/ViewCartPr'Component={ViewOrder}></Route> */}
      <Route path='/TestViewOrder'Component={TestViewOrder}></Route>
      <Route path='/PlaceOrder'Component={PlaceOrder}></Route>
      <Route path='placeorderfromcart'Component={PlaceOrderFromCart}></Route>
      <Route path='/orderdetails'Component={OrderDetails}></Route>
      <Route path='/payment'Component={Payment}></Route>
      <Route path='/forgotpassword'Component={forgotPassword}></Route>
      <Route path='/enterotp'Component={EnterOtp}></Route>
      <Route path='/resetpassword'Component={ResetPassword}></Route>


      </Routes>
     </div>
    </>
  );
}

export default App;

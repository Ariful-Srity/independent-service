
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import NotFound from './Pages/Shared/NotFound/NotFound';




function App() {




  return (
    <div >
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      <Footer></Footer>


    </div>
  );
}

export default App;

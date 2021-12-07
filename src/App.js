import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Pricing from './components/pricing_page/Pricing';
import Home from './components/Home';
import Services from './components/services_page/Services';
import ProductsPage from './components/products_page/ProductsPage';
import ProductDescriptionPage from './components/products_page/ProductDescriptionPage';

function App() {
  return (
    <Router>
           <div className="App">
             <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path="/products" element= {<ProductsPage/>}> </Route>
              <Route path='/pricing' element={<Pricing />}></Route>
              <Route path='/services' element={<Services />}> </Route>
              <Route path='/product-description-page' element={<ProductDescriptionPage />}></Route>
              </Routes>
          </div>
       </Router>
  );
}

export default App;

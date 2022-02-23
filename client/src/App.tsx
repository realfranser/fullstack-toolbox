import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Cart, Home, Login, Product, ProductList, Register } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        {/*TODO: Change false to user (from redux*/}
        <Route path="login" element={false ? <Navigate to="/" /> : <Login />} />
        {/*TODO: Change true to user (from redux*/}
        <Route
          path="register"
          element={true ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;

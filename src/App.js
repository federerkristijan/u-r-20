// react-router-dom v.6 Redirect -> Navigate
import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Navbar from "./component/Navbar";
// import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:productId" />
        </Routes>
      </main>
    </div>
  );
}

export default App;

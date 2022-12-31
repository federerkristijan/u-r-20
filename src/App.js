import { Route, Routes, Redirect } from "react-router-dom";

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
          <Route path="/" exact element={<Redirect to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:productId" />
        </Routes>
      </main>
    </div>
  );
}

export default App;

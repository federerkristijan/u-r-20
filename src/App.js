import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Navbar from "./component/Navbar";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:productId" loader={({ params }) => {
            console.log(params.productId)
          }} action={({ params }) => {}} element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

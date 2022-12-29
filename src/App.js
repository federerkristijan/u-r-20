import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/welcome" component={<Welcome />} />
          <Route path="/products" component={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { SignIn } from "./pages/signIn/signIn";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/signIn" element={<SignIn/>} />
          </Routes>
        </Router>
        <Footer/>
      </ShopContextProvider>
    </div>
  );
}

export default App;

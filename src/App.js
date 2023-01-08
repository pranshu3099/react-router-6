import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productid" element={<SingleProduct />} />
            <Route
              path="/login"
              element={<Login setuser={setUser}></Login>}
            ></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes user={user}>
                  <Dashboard user={user} />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

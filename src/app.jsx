import styles from "./app.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./routes/admin";
import Product from "./routes/product/product";
import Create from "./routes/product/create/create";
import Delivery from "./routes/product/delivery/delivery";
import Order from "./routes/order/order";
import User from "./routes/user/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;

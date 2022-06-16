import styles from "./app.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./routes/admin";
import Product from "./routes/product/product";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/product" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

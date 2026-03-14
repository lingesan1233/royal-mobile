import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Profit from "./pages/Profit";
import Stock from "./pages/Stock";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <Navbar />

        <div className="page-content">
          {children}
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Layout><Dashboard /></Layout>}
        />

        {/* Product Management */}
        <Route
          path="/products"
          element={<Layout><Products /></Layout>}
        />

        {/* Sales Page */}
        <Route
          path="/sales"
          element={<Layout><Sales /></Layout>}
        />

        {/* Expenses Page */}
        <Route
          path="/expenses"
          element={<Layout><Expenses /></Layout>}
        />

        {/* Stock Page */}
        <Route
          path="/stock"
          element={<Layout><Stock /></Layout>}
        />

        {/* Profit Page */}
        <Route
          path="/profit"
          element={<Layout><Profit /></Layout>}
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={<Layout><Reports /></Layout>}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
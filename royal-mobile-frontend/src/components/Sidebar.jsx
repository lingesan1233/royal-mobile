import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaMoneyBill, FaFileExcel } from "react-icons/fa";

export default function Sidebar(){
  return(
    <div className="sidebar">

      <h2 className="logo">📱 Royal Mobile</h2>

      <nav className="menu">

        <Link to="/dashboard">
          <FaTachometerAlt className="icon"/> Dashboard
        </Link>

        <Link to="/products">
          <FaBoxOpen className="icon"/> Products
        </Link>

        <Link to="/sales">
          <FaShoppingCart className="icon"/> Sales
        </Link>

        <Link to="/expenses">
          <FaMoneyBill className="icon"/> Expenses
        </Link>

        <Link to="/reports">
          <FaFileExcel className="icon"/> Reports
        </Link>

      </nav>

    </div>
  )
}

import { useEffect, useState } from "react";
import API from "../services/api";
import SalesChart from "../components/SalesChart";

export default function Dashboard() {

  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [products, setProducts] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {

      const salesRes = await API.get("/sales");
      const expenseRes = await API.get("/expenses");
      const productRes = await API.get("/products");

      setSales(salesRes.data);
      setExpenses(expenseRes.data);
      setProducts(productRes.data);

      const low = productRes.data.filter(p => p.stock < 5);
      setLowStock(low);

    } catch (error) {
      console.log(error);
    }
  };

  const totalSales = sales.reduce((a, b) => a + b.total, 0);
  const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);
  const profit = totalSales - totalExpenses;

  return (
    <div className="dashboard">

      <h2 className="dashboard-title">Dashboard Overview</h2>

      {/* Dashboard Cards */}
      <div className="cards">

        <div className="card sales">
          <h4>Total Sales</h4>
          <p>₹{totalSales}</p>
        </div>

        <div className="card expense">
          <h4>Total Expenses</h4>
          <p>₹{totalExpenses}</p>
        </div>

        <div className="card profit">
          <h4>Profit</h4>
          <p>₹{profit}</p>
        </div>

      </div>

      {/* Low Stock Alert */}
      {lowStock.length > 0 && (
        <div className="alert-box">

          <h4>⚠ Low Stock Alert</h4>

          {lowStock.map(p => (
            <div key={p._id} className="alert-item">
              {p.name} — Only <b>{p.stock}</b> left
            </div>
          ))}

        </div>
      )}

      {/* Sales Chart */}
      <div className="chart-section">

        <h3>Sales Chart</h3>

        <SalesChart data={sales} />

      </div>

      {/* Current Stock */}
      <div className="stock-section">

        <h3>Current Stock</h3>

        <table className="stock-table">

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>

            {products.map(p => (

              <tr
                key={p._id}
                className={p.stock < 5 ? "low-stock-row" : ""}
              >

                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Sales(){

const [products,setProducts] = useState([]);
const [sales,setSales] = useState([]);
const [qty,setQty] = useState({});

useEffect(()=>{
loadData();
},[]);

const loadData = async()=>{

const productRes = await API.get("/products");
const salesRes = await API.get("/sales");

setProducts(productRes.data);
setSales(salesRes.data);

};

const sellProduct = async(id)=>{

const quantity = qty[id] || 0;

if(quantity <= 0){
alert("Enter quantity");
return;
}

await API.post("/sales",{
productId:id,
quantity
});

alert("Sale recorded");

loadData();

};

return(

<div>

<h2>Sales Page</h2>

{/* SELL PRODUCT SECTION */}

<h3>Sell Products</h3>

<table>

<thead>

<tr>
<th>Product</th>
<th>Stock</th>
<th>Sell Qty</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{products.map(p=>(

<tr key={p._id}>

<td>{p.name}</td>

<td>{p.stock}</td>

<td>

<input
type="number"
placeholder="Qty"
onChange={(e)=>setQty({
...qty,
[p._id]:e.target.value
})}
/>

</td>

<td>

<button onClick={()=>sellProduct(p._id)}>
Sell
</button>

</td>

</tr>

))}

</tbody>

</table>

{/* SALES HISTORY */}

<h3 style={{marginTop:"40px"}}>Sales History</h3>

<table>

<thead>

<tr>

<th>Product</th>
<th>Quantity</th>
<th>Total</th>
<th>Date</th>

</tr>

</thead>

<tbody>

{sales.map(s=>(

<tr key={s._id}>

<td>{s.productId?.name}</td>

<td>{s.quantity}</td>

<td>₹{s.total}</td>

<td>{new Date(s.date).toLocaleString()}</td>

</tr>

))}

</tbody>

</table>

</div>

);
}
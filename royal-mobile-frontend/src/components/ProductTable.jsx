import API from "../services/api";

export default function ProductTable({products,refresh,setEditProduct}){

const deleteProduct = async(id)=>{
await API.delete("/products/"+id);
refresh();
};

return(

<table>

<thead>
<tr>

<th>Image</th>
<th>Name</th>
<th>Price</th>
<th>Stock</th>
<th>Category</th>
<th>Action</th>

</tr>
</thead>

<tbody>

{products.map(p=>(

<tr key={p._id}
style={{background:p.stock<5?"#ffdddd":""}}>

<td>
<img
src={`https://royal-mobile.onrender.com/uploads/${p.image}`}
width="50"
/>
</td>

<td>{p.name}</td>
<td>{p.price}</td>
<td>{p.stock}</td>
<td>{p.category}</td>

<td>

<button
onClick={()=>setEditProduct(p)}
>
Edit
</button>

<button
onClick={()=>deleteProduct(p._id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

);
}
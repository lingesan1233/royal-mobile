import {useEffect,useState} from "react"
import API from "../services/api"

export default function Stock(){

const [products,setProducts]=useState([])

useEffect(()=>{
load()
},[])

const load = async()=>{
const res = await API.get("/products")
setProducts(res.data)
}

return(

<div>

<h2>Stock List</h2>

<table>

<tr>
<th>Product</th>
<th>Stock</th>
</tr>

{products.map(p=>(

<tr key={p._id}
style={{background:p.stock<5?"#ffdddd":""}}>

<td>{p.name}</td>
<td>{p.stock}</td>

</tr>

))}

</table>

</div>

)
}
import { useState, useEffect } from "react";
import API from "../services/api";

export default function ProductForm({ refresh, editProduct, clearEdit }) {

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [stock,setStock] = useState("");
const [category,setCategory] = useState("");
const [description,setDescription] = useState("");
const [image,setImage] = useState(null);

useEffect(()=>{

if(editProduct){

setName(editProduct.name || "");
setPrice(editProduct.price || "");
setStock(editProduct.stock || "");
setCategory(editProduct.category || "");
setDescription(editProduct.description || "");

}

},[editProduct]);

const resetForm = ()=>{
setName("");
setPrice("");
setStock("");
setCategory("");
setDescription("");
setImage(null);
};

const submit = async()=>{

try{

const formData = new FormData();

formData.append("name",name);
formData.append("price",price);
formData.append("stock",stock);
formData.append("category",category);
formData.append("description",description);

if(image){
formData.append("image",image);
}

if(editProduct){

await API.put("/products/"+editProduct._id,formData,{
headers:{ "Content-Type":"multipart/form-data" }
});

}else{

await API.post("/products",formData,{
headers:{ "Content-Type":"multipart/form-data" }
});

}

clearEdit();
resetForm();
refresh();

}catch(err){
console.log(err);
alert("Something went wrong");
}

};

return(

<div className="form">

<h3>{editProduct ? "Edit Product" : "Add Product"}</h3>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="number"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="number"
placeholder="Stock"
value={stock}
onChange={(e)=>setStock(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">Select Category</option>
<option value="Mobile">Mobile</option>
<option value="Mobile Charger">Mobile Charger</option>
<option value="Mobile Cases">Mobile Cases</option>
<option value="Service Mobile">Service Mobile</option>

</select>

<textarea
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button onClick={submit}>
{editProduct ? "Update Product" : "Add Product"}
</button>

</div>

);
}

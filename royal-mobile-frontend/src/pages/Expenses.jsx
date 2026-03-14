import {useState,useEffect} from "react"
import API from "../services/api"

export default function Expenses(){

const [title,setTitle]=useState("")
const [amount,setAmount]=useState("")
const [list,setList]=useState([])

useEffect(()=>{
load()
},[])

const load = async()=>{
const res = await API.get("/expenses")
setList(res.data)
}

const addExpense = async()=>{

await API.post("/expenses",{
title,
amount
})

setTitle("")
setAmount("")

load()

}

return(

<div>

<h2>Expenses</h2>

<input
placeholder="Expense Name"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={addExpense}>
Add Expense
</button>

<h3>Expense List</h3>

<ul>

{list.map(e=>(

<li key={e._id}>
{e.title} - ₹{e.amount}
</li>

))}

</ul>

</div>

)
}
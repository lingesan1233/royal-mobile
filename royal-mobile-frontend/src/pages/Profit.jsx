import {useEffect,useState} from "react"
import API from "../services/api"

export default function Profit(){

const [sales,setSales]=useState([])
const [expenses,setExpenses]=useState([])

useEffect(()=>{
load()
},[])

const load = async()=>{

const s = await API.get("/sales")
const e = await API.get("/expenses")

setSales(s.data)
setExpenses(e.data)

}

const totalSales =
sales.reduce((a,b)=>a+b.total,0)

const totalExpense =
expenses.reduce((a,b)=>a+b.amount,0)

const profit =
totalSales-totalExpense

return(

<div>

<h2>Profit Report</h2>

<p>Total Sales : ₹{totalSales}</p>

<p>Total Expenses : ₹{totalExpense}</p>

<h3>Profit : ₹{profit}</h3>

</div>

)
}
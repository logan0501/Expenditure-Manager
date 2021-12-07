import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
function Expenses(props){
    
    const [filterYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map(element => <ExpenseItem title={element.title} amount={element.amount} date={element.date} />)}
   
        </Card>
    )
}

export default Expenses;
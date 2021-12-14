import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React,{ useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses,setExpenses]=useState(INITIAL_EXPENSES);

  const expenseHandler = (data)=>{
    setExpenses((prevdata)=>{return [data,...prevdata];});
  }
  return (
    <Router>
      <Route exact path="/">
        <div>
          <NewExpense onSaveData={expenseHandler}/>
          <Expenses items={expenses}/>   
        </div>
      </Route>
    </Router>
 
  );
}

export default App;

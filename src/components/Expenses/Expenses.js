import { useState } from "react";
import ExpensesFilter from "../Filters/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const expenses = props.expenses;
  const [yearFilter, setYearFilter] = useState("2020");

  const changeFilterHandler = (value) => {
    // console.log(value);
    setYearFilter(value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterChange={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

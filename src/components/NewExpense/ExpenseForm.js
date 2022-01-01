import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [openMenu,setOpenMenu] = useState(false);
  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredTitle:event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredAmount:event.target.value};
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredDate:event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    // setOpenMenu(false);
  };

  const resetHandler = () => {
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    // setOpenMenu(false);
  };

  // const submitMenuHandler = (event) => {
  //     event.preventDefault();
  //     setOpenMenu(true);
  // }

  // if(openMenu === false){
  //     return (
  //         <form onSubmit={submitMenuHandler}>
  //             <div  className="new-expense__controls">
  //                 <div className="new-expense__actions">
  //                     <button type='submit'>Add New Expense</button>
  //                 </div>
  //             </div>

  //         </form>
  //             );
  // }
  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

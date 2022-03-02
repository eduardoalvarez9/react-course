import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";


function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        tile={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date} />
      <ExpenseItem
        tile={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date} />
      <ExpenseItem
        tile={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date} />
    </Card>
  );
}

export default Expenses;
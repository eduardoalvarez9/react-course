import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';


function Expenses(props) {
  let items = props.expenses.map(expense => {
    return <ExpenseItem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
  })

  return (
    <Card className="expenses">
      {items}
    </Card>
  );
}

export default Expenses;
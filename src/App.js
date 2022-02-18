import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id:1, title: 'Car insurance', date: new Date(2022,1,10), amount: 200},
    { id:2, title: 'Healt care', date: new Date(2021,1,23), amount: 100},
    { id:3, title: 'food', date: new Date(2020,1,2), amount: 60.45},
    { id:4, title: 'internet', date: new Date(2021,3,11), amount: 50.50},
    { id:5, title: 'pet food', date: new Date(2022,7,10), amount: 20.73},
  ];
  
  return (
      <div>
        <h1>Let's get Started!</h1>
        <ExpenseItem 
          tile={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}/>
      </div>
  );
}

export default App;

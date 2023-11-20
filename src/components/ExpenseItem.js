import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem=(props)=>{
 // const expenseDate=new Date(2023,11,2013)
 // const expenseTitle='Car Insurance'
 // const expenseAmount=294.67  
  //const LocationOfExpenditure='Lucknow'

  //const month=props.date.toLocaleString('en-US',{month:'long'});
  //const day=props.date.toLocaleString('en-US',{day:'2-digit'});
  //const year=props.date.getFullYear();
  const clickHandler=()=>{
    console.log("Clicked!!!!")
  }
  const deleteHandler=()=>{
    console.log("Deleted!!!")
  }
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}></ExpenseDate>
           <ExpenseDetails amount={props.amount} location={props.location} title={props.title} ></ExpenseDetails>
           <button onClick={clickHandler}>Change Title</button>
           <button onClick={deleteHandler}>Delete</button>
        </div>
        
        
    )
}
export default ExpenseItem;
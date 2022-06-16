import {  useState} from "react";
import Todolist from "./pages/Todolist";
import './App.css';
import { ListGroup } from "react-bootstrap";


const App =()=> {
  let itemListInitial = [ 
    {taskName: "Wash Dishes" , status: false} , 
    {taskName: "Walk the dogs" , status: true} , 
    {taskName: "Play Ball" , status: false} 
    ]

let [itemList , setItemList] = useState (itemListInitial);

  const onItemClick =(index)=>{
    let tempList = [...itemList];
    tempList[index].status = false;
    setItemList(tempList);
  }

  return (
      <div className='container'>
        <ListGroup>
          <Todolist itemList={itemList} clickFunction={onItemClick}/>
        </ListGroup>
      </div>
  );
}

export default App;

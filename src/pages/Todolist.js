import { React } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

const Todolist = ({itemCounter,itemList,clickFunction}) =>{
    
    return(
        <Container>
            <p >{itemCounter}</p>
            <ListGroup >
                {itemList.map((list , index) =>(
                   list.status? <ListGroup.Item key={index} className='listItems' onClick={()=>clickFunction(index)}>{list.taskName}</ListGroup.Item> 
                   :<ListGroup.Item key={index} className='disabledItems'>{list.taskName}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
       
    );
}

export default Todolist;
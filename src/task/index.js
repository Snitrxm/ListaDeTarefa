import { BiTrashAlt } from 'react-icons/bi';

import './style.css'

const handleDone = (input, h3, p) => {
    if(input.checked){
        h3.style.textDecoration = 'line-through';
        p.style.textDecoration = 'line-through';
    }else{
        h3.style.textDecoration = 'none';
        p.style.textDecoration = 'none';
    }
}


const tasks = document.getElementsByClassName('tasks');

const handleDelete = (div) => {
    tasks[0].removeChild(div);
}




const task = (props) => {
     return (
        <div className="task">
            <div className="taskContainer">
                <input type='checkbox' className='input' onChange={() => handleDone(input[0],h3[0], p[0])}></input>
                <div className="texts">
                    <h3 className='h3'>{props.task}</h3>
                    <p className='p'>Tarefas</p>
                </div>
            </div>
            <div className="trashIcon">
                <BiTrashAlt className='trash' onClick={props.delete}/>
            </div>
        </div>
    );
}

const input = document.getElementsByClassName('input');
const h3 = document.getElementsByClassName('h3');
const p = document.getElementsByClassName('p');
const taskContainer = document.getElementsByClassName('taskContainer');

export default task;
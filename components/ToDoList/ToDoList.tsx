import ToDoForm from "../TodoForm/ToDoForm";
import { type TaskStructure } from '@/app/page'
import classes from './todoList.module.css'

type ToDoListProps = {
  tasks:TaskStructure[]
  onFinishedTask: (id:number)=>void;
}

export const ToDoList = ({tasks, onFinishedTask }:ToDoListProps) => {
  return (
  <ul className={classes.ul}>
  {tasks.map((task)=>(
  <li key={task.id}>
    <ToDoForm id={task.id} text={task.text} description={task.description} comment={task.comment} onFinished={onFinishedTask} />
  </li>
  ))}
  </ul>
  );
}

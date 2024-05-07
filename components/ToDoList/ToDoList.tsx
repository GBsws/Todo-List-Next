import ToDoForm from "../TodoForm/ToDoForm";
type ToDoListProps = {
  tasks:{
    text:string;
    description:string;
    comment:string;
    id:number;
  }[]
}

export const ToDoList = ({tasks}:ToDoListProps) => {
  return (
  <ul>
  {tasks.map((task)=>(
  <li key={task.id}>
    <ToDoForm text={task.text} description={task.description} comment={task.comment} />
  </li>
  ))}
  </ul>
  );
}

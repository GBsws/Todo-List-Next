import styles from "./page.module.css";
import {Test} from '../components/Test'

export const ToDoForm =()=>{
  return (
      <form>
        <label htmlFor="task_text">Task Text </label>
        <input type="text" id="task_text" name="task_text" required
        placeholder="Task to do" />
        &nbsp;
        <label htmlFor="task_description">Task Description </label>
        <input type="text" id="task_text" name="task_text" required
        placeholder="Describe your task" /><br></br>
        <label htmlFor="task_comment">Comment on task </label>
        <textarea rows={4} cols={35} id="task_comment" name="task_comment"
        placeholder="Comment your task" />
      </form>
  )
}

export const TodoList=()=>{
  return <h2>Jsem list</h2>
}

export default function Home() {
  return (
    <>
      <div>
        <h1>To do list</h1>
      </div>
      <ToDoForm />
      <Test />
    </>
  );
}



import { type FormEvent, useRef } from "react";
import classes from './newTodo.module.css'

type NewTodoProps = {
  onAddTask:(text:string,description:string,comment:string)=> void;
}

export const NewTodo =({onAddTask}:NewTodoProps)=>{
  const text = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const comment = useRef<HTMLTextAreaElement>(null); 

  const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    
    const enteredText = text.current!.value;
    const enteredDescription = description.current!.value;
    const enteredComment = comment.current!.value;

    event.currentTarget.reset()
    onAddTask(enteredText, enteredDescription,enteredComment)
  }

  return (
  <form id={classes.form} onSubmit={handleSubmit}>
    <p className={classes.task_name}>
      <label htmlFor="text">Name the Task </label>
      <input id="text" type="text" ref={text}/>
    </p>
    <p className={classes.task_description}>
      <label htmlFor="description">Describe the Task </label>
       <input id="description" type="text" ref={description} />
    </p>
    <p className={classes.p}>
     <label className={classes.comment} htmlFor="comment">Insert comment  </label>
      <textarea id="comment" rows={6} cols={35} ref={comment} />
    </p>
    <p className={classes.button}>
      <button className ={classes.button_type} type="submit">Add Task</button>
    </p>
  </form>
)}

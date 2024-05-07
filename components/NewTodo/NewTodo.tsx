import { type FormEvent, useRef } from "react";

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
  <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="text">Name of Task </label>
      <input id="text" type="text" ref={text}/>
    </p>
    <p>
      <label htmlFor="description">Short description </label>
       <input id="description" type="text" ref={description} />
    </p>
    <p>
     <label htmlFor="comment">Insert comment</label>
      <textarea id="comment" rows={6} cols={35} ref={comment} />
    </p>
    <p>
      <button type="submit">Add Task</button>
    </p>
  </form>
)}

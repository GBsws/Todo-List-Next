import classes from './todoForm.module.css'

export type ToDoFormProps = {
  id:number;
  text:string; 
  description:string;
  comment:string;
  onFinished: (id:number)=>void;
}

export default function ToDoForm({text, description, id, comment,onFinished}:ToDoFormProps){
  return(
      <>
       <form id="form">
        <p>
        <label className ={classes.text} htmlFor="task_text">Task </label>
         <input type="text" id="task_text" name="task_text" required
        placeholder="placeholder" value={text} />
        </p>
        <br></br>
        <p>
        <label className = {classes.description} htmlFor="task_description">Task Description </label>
        <input type="text" id="task_text" name="task_text" required
         placeholder="describe the task" value={description} /><br></br>
         <label className={classes.comment} htmlFor="task_comment">Comment on the task </label>
         </p>
        <textarea  rows={4} cols={35} id="task_comment" name="task_comment"
         placeholder="comment the task" value={comment}/>
         </form>
         <button onClick={() => onFinished(id)} >Finished</button>
      </>
  )
}


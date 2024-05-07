export default function ToDoForm({text, description,comment}:{text:string; description:string;comment:string}){
  return(
      <>
       <form>
        <label htmlFor="task_text">Task Text </label>
         <input  type="text" id="task_text" name="task_text" required
        placeholder="placeholder" value={text} />
        <br></br>
        <label htmlFor="task_description">Task Description </label>
        <input type="text" id="task_text" name="task_text" required
         placeholder="describe the task" value={description} /><br></br>
         <label htmlFor="task_comment">Comment on task </label>
        <textarea rows={4} cols={35} id="task_comment" name="task_comment"
         placeholder="comment the task" value={comment}/>
         </form>
         <button>Done</button>
      </>
  )
}


"use client"
import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { useState } from "react";
import {ToDoList} from "@/components/ToDoList/ToDoList";
import { NewTodo } from "@/components/NewTodo/NewTodo";

export type TaskStructure ={
  text:string;
  description:string;
  comment:string;
  id:number;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskStructure[]>([]);

  function handleAddTask(text:string,description:string, comment:string){
    setTasks(prevTasks=>{
      const newTask:TaskStructure = {
        id:Math.random(),
        text:text,
        description:description,
        comment: comment,
      };
      return [...prevTasks, newTask]
    })
  }

  const handleDoneTask = (id:number)=>{
    setTasks(prevTasks=> prevTasks.filter((task)=>task.id !== id))
  }
  return (
      <main className={styles.main}>
      <Header />
      <NewTodo onAddTask={handleAddTask} />
      <ToDoList tasks={tasks} onFinishedTask={handleDoneTask} />
      </main>
  );
}



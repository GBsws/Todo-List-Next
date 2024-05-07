"use client"
import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { useState } from "react";
import {ToDoList} from "@/components/ToDoList/ToDoList";

type TaskStructure ={
  text:string;
  description:string;
  comment:string;
  id:number;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskStructure[]>([]);

  function handleAddTask(){
    setTasks(prevGoals=>{
      const newTask:TaskStructure = {
        id:Math.random(),
        text:'malý úkol v Next',
        description:'samostatná práce s Next',
        comment:'okomentuj výsledek snažení'
      };
      return [...prevGoals, newTask]
    })
  }
  return (
      <main className={styles.main}>
      <Header />
      <button onClick={handleAddTask}>Add task</button>
      <ToDoList tasks={tasks} />
      </main>
  );
}



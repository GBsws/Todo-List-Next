import styles from "./page.module.css";
import ToDoForm from "@/components/TodoForm/ToDoForm";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1>To do list</h1>
      <ToDoForm text="zvládnout úkol" description="vytvořit malý projekt v Next" comment="komentář k úkolu" />
      </main>
  );
}



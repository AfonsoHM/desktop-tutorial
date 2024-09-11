import { useState } from "react"
import { Header } from "./components/Header/Header"
import { InputForm } from "./components/InputForm/InputForm"
import { ListTasks } from "./components/ListTasks/ListTasks"

export interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: 1,
      title: 'First task',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Second task',
      isCompleted: false,
    },
  ])

  return (
    <>
      <Header />
      <InputForm />
      <ListTasks tasks={tasks} />
    </>
  )
}

export default App

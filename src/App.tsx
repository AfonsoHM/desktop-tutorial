import { useState } from "react"
import { Header } from "./components/Header/Header"
import { InputForm } from "./components/InputForm/InputForm"
import { ListTasks } from "./components/ListTasks/ListTasks"

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

  function App() {
    const [tasks, setTasks] = useState<TasksProps[]>([
      {
        id: '1',
        title: 'First task',
        isCompleted: true,
      },

  ])

  function createNewTask(taskTitle: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  return (
    <>
      <Header />
      <InputForm onCreateNewTask={createNewTask}  />
      <ListTasks tasks={tasks} />
    </>
  )
}

export default App

import { useState } from "react"
import { Header } from "./components/Header"
import { InputForm } from "./components/InputForm"
import { ListTasks } from "./components/ListTasks"

export interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

  function App() {
    const [tasks, setTasks] = useState<TasksProps[]>([])

  function createNewTask(taskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: taskTitle,
      isCompleted: false,
    }
    setTasks((state) => [...state, newTask])
  }

  function handleDeleteTaskById(taskId: number) {
    const newTasks = tasks.filter(tasks => tasks.id !== taskId)
    setTasks(newTasks)

  }

  function handleToggleTask(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }


  return (
    <>
      <Header />
      <InputForm onCreateNewTask={createNewTask}  />
      <ListTasks tasks={tasks} onDelete={handleDeleteTaskById} onToggleTask={handleToggleTask} />
    </>
  )
}

export default App

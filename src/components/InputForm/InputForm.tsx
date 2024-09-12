import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from './inputForm.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface InputFormProps {
  onCreateNewTask: (taskTitle: string) => void
}

export function InputForm({onCreateNewTask}: InputFormProps) {

  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleSubmit(event: FormEvent ) {
    event.preventDefault()

    onCreateNewTask(newTaskTitle)
  } 

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value)
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} >
      <input 
        onChange={handleNewTaskChange}
        value={newTaskTitle}
        className={styles.newTaskForm}
        placeholder='Adicione uma nova tarefa'
      />
      
      <button>
        Criar
        <AiOutlinePlusCircle size={20} />
      </button>
    </form>
  )
}
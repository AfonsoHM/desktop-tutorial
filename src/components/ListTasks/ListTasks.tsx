import { Task } from '../Task/Task'

import {TasksProps} from '../../App'
import styles from './ListTasks.module.css'

interface Props {
  tasks: TasksProps[];
  onDelete: (taskId: string) => void;
}

export function ListTasks({ tasks, onDelete}: Props) {
  const taskQuantity = tasks.length
  const completedTask = tasks.filter(task => task.isCompleted).length


  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTask} de {taskQuantity}</span>
        </div>
      </header>
      
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task task={task} key={task.id}  onDelete={onDelete}/>
        ))}
      </div>
      
    </section>
  )
}
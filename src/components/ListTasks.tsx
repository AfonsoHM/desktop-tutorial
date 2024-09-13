import { Task } from './Task'

import {TasksProps} from '../App'
import styles from './ListTasks.module.css'
import { Empty } from './Empty';

interface Props {
  tasks: TasksProps[];
  onDelete: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function ListTasks({ tasks, onDelete, onToggleTask}: Props) {
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

      {tasks.length > 0 ? (
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task 
              task={task} 
              key={task.id}  
              onDelete={onDelete} 
              onToggleTask={onToggleTask}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      
    </section>
  )
}
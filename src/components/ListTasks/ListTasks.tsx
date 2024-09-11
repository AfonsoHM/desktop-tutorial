import { Task } from '../Task/Task'

import {TasksProps} from '../../App'
import styles from './ListTasks.module.css'

interface Props {
  tasks: TasksProps[];
}

export function ListTasks({ tasks}: Props) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task />
        ))}
      </div>
      
    </section>
  )
}
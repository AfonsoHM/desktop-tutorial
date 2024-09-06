import { Task } from '../Task/Task'
import styles from './ListTasks.module.css'


export function ListTasks() {
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
        <Task />
        <Task />
        <Task />
      </div>
      
    </section>
  )
}
import styles from './ListTasks.module.css'


export function ListTasks() {
  return (
    <section className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
    </section>
  )
}
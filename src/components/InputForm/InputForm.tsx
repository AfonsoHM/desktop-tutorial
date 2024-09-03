import styles from './inputForm.module.css'

export function InputForm() {
  return (
    <form className={styles.newTaskForm}>
      <input 
        placeholder='Adicione uma nova tarefa'
      />
      
      <button>Criar</button>
    </form>
  )
}
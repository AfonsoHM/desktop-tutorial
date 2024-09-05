import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from './inputForm.module.css'

export function InputForm() {
  return (
    <form className={styles.formContainer} >
      <input 
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
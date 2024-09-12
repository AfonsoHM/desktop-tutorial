import { TbTrash } from 'react-icons/tb'
import styles from './Task.module.css'
import { TasksProps } from './../../App';

interface TaskProps {
  task: TasksProps
}

export function Task({ task }:TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div className={styles.check} />
      </button>

      <p> {task.title} </p>
      
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
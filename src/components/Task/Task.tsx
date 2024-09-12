import { TbTrash } from 'react-icons/tb'
import styles from './Task.module.css'
import { TasksProps } from './../../App';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface TaskProps {
  task: TasksProps;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }:TaskProps) {
  const isCompleted = true
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        {isCompleted ? <BsFillCheckCircleFill/> : <div className={styles.check} />}
      </button>

      <p> {task.title} </p>
      
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
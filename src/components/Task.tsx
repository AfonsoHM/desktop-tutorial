import { TbTrash } from 'react-icons/tb'
import styles from './Task.module.css'
import { TasksProps } from '../App';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface TaskProps {
  task: TasksProps;
  onDelete: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function Task({ task, onDelete, onToggleTask }:TaskProps) {
  
  return (
    <div className={styles.task} >
      <button 
        className={styles.checkContainer} 
        onClick={() => onToggleTask(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill/> : <div className={styles.check} />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}> {task.title} </p>
      
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
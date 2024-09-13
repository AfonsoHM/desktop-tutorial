import { TbClipboardText } from "react-icons/tb";

import styles from './empty.module.css'

export function Empty() {
  return (
    <div className={styles.line}>
      <section className={styles.empty}>
        
        <TbClipboardText size={50}/>
        <div>
          <p>Você ainda não tem tarefas cadastradas </p>
          <span> Crie tarefas e organize seus items a fazer</span>
        </div>
      </section>
    </div>
  )
}
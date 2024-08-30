import { PencilLine } from "@phosphor-icons/react";
import styles from './sidebar.module.css';

export const SideBar = () => {
  return <aside className={styles.sidebar}>
    <img className={styles.cover} src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className={styles.profile}>
      <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-4e154be1-07f7-4ae5-ac4d-c68694f2fb4a-1724103699748.jpg" alt="" />
      <h2>Leslie Alexander</h2>
      <span>UI Designer</span>
    </div>

    <footer>
      <a href='//' >
        <PencilLine size={20} />
        Editar seu perfil</a>
    </footer>
  </aside>
}
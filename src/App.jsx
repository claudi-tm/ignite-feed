
import { Header } from './components/header'

import styles from './App.module.css'
import { SideBar } from './components/sidebar'
import { Post } from './components/post'
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <Post text="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"/>
      </div>
    </>


  )
}





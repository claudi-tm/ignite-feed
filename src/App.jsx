
import { Header } from './components/header'

import styles from './App.module.css'
import { SideBar } from './components/sidebar'
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>post</main>
      </div>
    </>


  )
}



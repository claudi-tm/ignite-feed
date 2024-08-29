import styles from './header.module.css'
import Logo from '../assets/Ignite.png'

export const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <img src={Logo} alt="" />
      <h1>Ignite Feed</h1>
    </header>
    )
}
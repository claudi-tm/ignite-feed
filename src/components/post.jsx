import styles from './post.module.css'

export const Post = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-4e154be1-07f7-4ae5-ac4d-c68694f2fb4a-1724103699748.jpg" alt="" />
        <div className={styles.wrapper}>
          <div className={styles.wrapper2}>
            <h3>Claudio Tomas</h3>
            <span>Dev Front-End</span>
          </div>
          <span>Publicado há 1h</span>
        </div>
      </div>
      <p className={styles.text}>{props.text}</p>
      <p>{props.link}</p>
      <p>{props.hashtag}</p>
      <p>Deixe seu feedback</p>
      <form action="">
        <textarea name="" id=""></textarea>
        <button>Publicar</button>
      </form>

    </main>

  )
}
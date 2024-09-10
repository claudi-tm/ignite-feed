import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const publishedAtFormated = format(publishedAt, "dd 'de' MMMM yyyy", { locale: ptBR })
  const publishedDescription = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
  const [comments, setComments]  = useState(["Muito bom Devon, parabéns!! 👏👏"])


  function handleCreateNewComment() {
    event.preventDefault()
    let newCommentText = event.target.comment.value // with name
    setComments([...comments, newCommentText])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>{publishedDescription}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {return <p key={line}>{line.content}</p>}
          else if (line.type === 'link') return <p key={line}><a href="//">{line.content}</a></p>
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder="Deixe um comentário"
          // value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}

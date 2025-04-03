import styles from './cardPopulares.module.css';

const CardPopulares = ({title, description, image, likes, comments, author, authorAvatar, category}) => {

    return (
          <div className={styles.memeCard}>
            <div className={styles.memeCardHeader}>
              <div className={styles.memeAuthor}>
                <img src={authorAvatar} alt={author} />
                <span>{author}</span>
              </div>
              <span className={styles.memeCategory}>{category}</span>
            </div>
            <img
              src={image}
              alt={title}
              className={styles.memeImage}
            />
            <div className={styles.memeContent}>
              <h3 className={styles.memeTitle}>{title}</h3>
              <p className={styles.memeDescription}>{description}</p>
              <div className={styles.interactionBar}>
                <div className={styles.interactionButton}>
                  <span>👍</span>
                  <span>{likes}</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>💬</span>
                  <span>{comments}</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>🔄</span>
                  <span>Share</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>🔖</span>
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>

    );
}
export default CardPopulares;
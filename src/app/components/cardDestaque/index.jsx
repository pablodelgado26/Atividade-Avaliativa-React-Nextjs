import styles from './cardDestaque.module.css';

const CardDestaques = ({ image, title, author, category, trending }) => {

  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredImageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.featuredImage}
        />
        {trending && (
          <span className={styles.trendingBadge}>🔥 Trending</span>
        )}
      </div>
      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{title}</h3>
        <div className={styles.featuredInfo}>
          <span className={styles.featuredAuthor}>
            Por {author}
          </span>
          <span className={styles.featuredCategory}>
            {category}
          </span>
        </div>
      </div>
    </div>

  );
}
export default CardDestaques;
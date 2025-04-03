import styles from './banner.module.css';

const Banner = ({title, description, image, likes, comments, author,authorAvatar}) => {
      const memeOfTheDay = {
        id: 7,
        title: "Meme do Dia: Quando seu código funciona de primeira",
        description:
          "Este momento raro que todos os desenvolvedores sonham em experimentar!",
        image: "https://i.imgur.com/vldGJnz.jpg",
        likes: 2452,
        comments: 387,
        author: "SuperCoder",
        authorAvatar: "https://i.pravatar.cc/150?img=20",
      };
    return (
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Meme do Dia</span>
              <h2 className={styles.heroTitle}>{title}</h2>
              <p className={styles.heroDescription}>
                {description}
              </p>
              <div className={styles.heroAuthor}>
                <img
                  src={authorAvatar}
                  alt={author}
                />
                <span>Por {author}</span>
              </div>
              <div className={styles.heroStats}>
                <span>❤️ {likes}</span>
                <span>💬 {comments}</span>
              </div>
              <button className={styles.heroButton}>Ver meme completo</button>
            </div>
            <div className={styles.heroImageContainer}>
              <img
                src={image}
                alt={title}
                className={styles.heroImage}
              />
            </div>
          </section>
    );
}

export default Banner;
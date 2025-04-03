import styles from './feed.module.css';

const Feed = ({ children }) => {
    return (

        <section className={styles.feedSection}>
            <div className={styles.feedHeader}>
                <h2 className={styles.sectionTitle}>Memes Populares</h2>
                <div className={styles.feedFilters}>
                    <button className={`${styles.filterButton} ${styles.active}`}>
                        Recentes
                    </button>
                    <button className={styles.filterButton}>Mais curtidos</button>
                    <button className={styles.filterButton}>Mais comentados</button>
                </div>
            </div>
            <div className={styles.feedGrid}>
                {children}
            </div>
            <button className={styles.loadMoreButton}>
                Carregar mais memes
            </button>
        </section>

    );
}

export default Feed;
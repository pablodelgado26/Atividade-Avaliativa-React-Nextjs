import styles from './feturedSection.module.css';

const FeaturedSection = ({children}) => {
    return (
        <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
        <div className={styles.featuredGrid}>
            {children}
        </div>
      </section>
    );
}

export default FeaturedSection;
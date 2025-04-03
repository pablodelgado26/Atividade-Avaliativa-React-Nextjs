import styles from "./criadores.module.css";

const Criadores = ({children}) => {
    return (
        <section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
                {children}
            </div>
          </section>
    );
}

export default Criadores;
import styles from './divisao.module.css';

const Divisao = ({children}) => {
    return (
        <div className={styles.mainContent}>
        <div className={styles.contentArea}>
            {children}
        </div>
        </div>
    );
}

export default Divisao;
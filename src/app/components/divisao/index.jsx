import styles from './divisao.module.css';

const Divisao = ({children}) => {
    return (
        <div className={styles.mainContent}>
            {children}
        </div>
    );
}

export default Divisao;
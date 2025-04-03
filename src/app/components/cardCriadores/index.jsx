import styles from "./cardCriadores.module.css";

const CardCriadores = ({ avatar, name, bio, followers }) => {
    return (
        <div className={styles.creatorCard}>
            <img
                src={avatar}
                alt={name}
                className={styles.creatorAvatar}
            />
            <h3 className={styles.creatorName}>{name}</h3>
            <p className={styles.creatorBio}>{bio}</p>
            <div className={styles.creatorStats}>
                <span className={styles.creatorFollowers}>
                    {followers} seguidores
                </span>
            </div>
            <button className={styles.followButton}>Seguir</button>
        </div>
    );
}

export default CardCriadores;
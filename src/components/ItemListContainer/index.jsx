import styles from "./greeting.module.scss";

const ItemListContainer = ({greeting}) => {
    return <div className={styles.glass}>
        <div className={styles.texto}><p>{greeting}</p></div>
        </div>
};

export default ItemListContainer
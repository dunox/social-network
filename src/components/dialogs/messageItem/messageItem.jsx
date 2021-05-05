import styles from "../styles/index.module.scss";


export const MessageItem = (props) => {
    return (
        <div className={styles.messageItem}>
            <span>{props.message}</span>
        </div>
    )
}
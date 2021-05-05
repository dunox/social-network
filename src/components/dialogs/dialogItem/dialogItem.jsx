import styles from "../styles/index.module.scss";
import {NavLink} from "react-router-dom";


export const DialogItem =  (props) => {

    const path = `/dialogs/${props.id}`;

    return (
        <div className={styles.dialogItem + ' ' + styles.active}>
            <NavLink to={path}>
                <span>{props.name}</span>
            </NavLink>

        </div>
    )
}
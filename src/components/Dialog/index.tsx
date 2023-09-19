import React from "react";
import { DialogProps } from "./Dialog.types";
import styles from './styles.module.scss';



export default function Dialog({
    active = false,
    onClose = (event: any) => { },
    children = null
}: DialogProps) {

    function onClick(event: any) {
        if (event.target.id == 'dialog-backdrop') {
            onClose(event)
        }
    }

    return (
        <div id="dialog-backdrop" className={`${styles.container} ${active ? styles.active : styles.disabled}`} onClick={onClick}>
            <div className={styles.dialog_window}>
                {children}
            </div>
        </div>
    )
}
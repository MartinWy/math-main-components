import React from "react";
import { DialogProps } from "./Dialog.types";
import styles from './styles.module.scss';


export interface DialogData {
    isActive: boolean
    data: any
}



export function Dialog({
    data,
    onClose = (event: any, data: any) => { },
    children = null
}: DialogProps) {

    function onClick(event: any) {
        if (event.target.id == 'dialog-backdrop' && data) {
            onClose(event, data.data)
        }
    }

    return (
        <div id="dialog-backdrop" className={`${styles.container} ${data?.isActive ? styles.active : styles.disabled}`} onClick={onClick}>
            <div className={styles.dialog_window}>
                {children}
            </div>
        </div>
    )
}
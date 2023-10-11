import React from "react";
import styles from './styles.module.scss';


export interface DialogData {
    isActive: boolean
    data?: any
}



export function Dialog({
    data,
    text,
    onClose = (event: any, data: any) => { },
    onSubmit = (event: any, data: any) => { },
    children = null
}:
    {
        data?: DialogData
        text?: any
        onClose?: (event: React.MouseEventHandler<HTMLDivElement>, data: any) => void,
        onSubmit?: (event: React.MouseEventHandler<HTMLButtonElement>, data: any) => void
        children: any
    }) {

    function onClick(event: any) {
        if (event.target.id == 'dialog-backdrop' || event.target.id == 'cancel-button') {
            if (data) onClose(event, data.data)
        }
    }

    return (
        <div id="dialog-backdrop" className={`${styles.container} ${data?.isActive ? styles.active : styles.disabled}`} onClick={onClick}>
            <div className={styles.dialog_window}>
                {children}
                {text && <h1>{text}</h1>}
                <button className={styles.cancel_button} id="cancel-button" onClick={onClick}>Abbrechen</button>
                <button className={styles.submit_button} id="submit-button" onClick={(event: any) => onSubmit(event, data?.data)}>Bestätigen</button>
            </div>
        </div>
    )
}
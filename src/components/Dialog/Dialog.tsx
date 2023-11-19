import React, { MouseEvent } from "react";
import styles from './styles.module.scss';


export interface DialogData {
    isActive: boolean
    data?: any
}



export function Dialog({
    data,
    text,
    onClose,
    onSubmit,
    children
}:
    {
        data?: DialogData
        text?: any
        onClose?: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, data?: any | undefined) => void,
        onSubmit?: (event: React.MouseEvent<HTMLButtonElement>, data?: any | undefined) => void
        children: any
    }) {

    function onClick(event: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
        event.preventDefault()

        const id = event.currentTarget.id

        if (["dialog-backdrop", "cancel-button"].includes(id)) {
            if (onClose) onClose(event, data?.data)
        }
    }

    return (
        <div id="dialog-backdrop" className={`${styles.container} ${data?.isActive ? styles.active : styles.disabled}`} onClick={onClick}>
            <div className={styles.dialog_window}>
                {children}
                {text && <h1>{text}</h1>}
                <button className={styles.cancel_button} id="cancel-button" onClick={onClick}>Abbrechen</button>
                <button className={styles.submit_button} id="submit-button" onClick={(event: MouseEvent<HTMLButtonElement>) => onSubmit && onSubmit(event, data?.data)}>Bestätigen</button>
            </div>
        </div>
    )
}
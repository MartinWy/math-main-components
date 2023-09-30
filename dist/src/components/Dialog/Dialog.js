import React from 'react';
import styles from './styles.module.scss.js';

function Dialog({ active = false, onClose = (event) => { }, children = null }) {
    function onClick(event) {
        if (event.target.id == 'dialog-backdrop') {
            onClose(event);
        }
    }
    return (React.createElement("div", { id: "dialog-backdrop", className: `${styles.container} ${active ? styles.active : styles.disabled}`, onClick: onClick },
        React.createElement("div", { className: styles.dialog_window }, children)));
}

export { Dialog };

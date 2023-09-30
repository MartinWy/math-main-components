import React, { useState } from 'react';
import { SvgIcon } from '../SvgIcon/SvgIcon.js';
import styles from './styles.module.scss.js';

function Accordeon({ title, children }) {
    const [isActive, setActive] = useState(false);
    return (React.createElement("div", { className: [styles.container, isActive ? styles.active : styles.not_active].join(" ") },
        React.createElement("div", { className: styles.head, onClick: () => setActive(!isActive) },
            React.createElement(SvgIcon, { iconName: "expand_more" }),
            React.createElement("h3", null, title)),
        React.createElement("div", { className: styles.content }, children)));
}

export { Accordeon };

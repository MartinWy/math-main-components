import { SvgIcon } from 'components/SvgIcon';
import React, { MouseEvent } from 'react';
import styles from './styles.module.scss';

type ButtonType = "blue" | "red" | "grey" | "lightBlue"


export function Button({
    id,
    text,
    iconName,
    iconFill = "white",
    type = "blue",
    onClick = () => { }
}: {
    id?: string,
    text?: string,
    iconName?: string,
    iconFill?: string,
    type?: ButtonType,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container}>
            <button
                className={[styles.button, styles[type], (text && !iconName) ? styles.onlyText : "", (!text && iconName) ? styles.onlyIcon : ""].join(" ")}
                onClick={onClickButton}
                id={id}
            >
                {text}
                {iconName && <SvgIcon iconName={iconName} fill={iconFill} />}
            </button>
        </div>
    )
}
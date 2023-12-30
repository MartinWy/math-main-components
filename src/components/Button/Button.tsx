import { SvgIcon } from 'components/SvgIcon';
import React, { MouseEvent } from 'react';
import styles from './styles.module.scss';


export function Button({
    text,
    iconName,
    iconFill = "white",
    type = "blue",
    onClick = () => { }
}: {
    text?: string,
    iconName?: string,
    iconFill?: string,
    type?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container}>
            <button className={[styles.button, styles[type], (text && !iconName) ? styles.onlyText : "", (!text && iconName) ? styles.onlyIcon : ""].join(" ")} onClick={onClickButton}>
                {text}
                {iconName && <SvgIcon iconName={iconName} fill={iconFill} />}
            </button>
        </div>
    )
}
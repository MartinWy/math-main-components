import { SvgIcon } from 'components/SvgIcon';
import React, { MouseEvent } from 'react';
import styles from './styles.module.scss';


export function PrimaryButton({
    text,
    iconName,
    type = "blue",
    onClick = () => { }
}: {
    text: string,
    iconName: string,
    type?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container}>
            <button className={`${styles.button} ${styles[type]}`} onClick={onClickButton}>{text}<SvgIcon iconName={iconName} fill="white" /></button>
        </div>
    )
}
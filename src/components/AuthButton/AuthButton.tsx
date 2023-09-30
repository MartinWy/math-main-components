import { SvgIcon } from 'components/SvgIcon'
import React, { MouseEventHandler } from 'react'
import styles from './styles.module.scss'


export function AuthButton({
    text,
    type = "submit",
    theme = "primary",
    iconName = "arrow_forward",
    isVisible = true,
    onClick = (event: any) => { }
}: {
    text: string | undefined,
    type?: 'submit' | 'reset' | 'button' | undefined,
    theme?: 'primary' | 'secondary' | undefined,
    iconName?: string,
    isVisible?: boolean,
    onClick?: MouseEventHandler | undefined
}) {

    return (
        <>
            <div className={[styles.container, isVisible ? styles.visible : styles.hidden, ["arrow_forward"].includes(iconName) ? styles.rotate : null].join(" ")}>
                <button type={type} className={`${styles.button} ${styles[theme]}`} onClick={onClick}>
                    {text}
                    <SvgIcon iconName={iconName} />
                </button>
            </div>
        </>
    )
}
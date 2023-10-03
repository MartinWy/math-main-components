import { SvgIcon } from 'components/SvgIcon'
import React, { CSSProperties, MouseEvent } from 'react'
import styles from './styles.module.scss'

export function FormButton({
    text,
    style = {},
    iconName = "",
    type = "submit",
    onClick = (event: any) => { }
}: {
    text: string,
    style?: CSSProperties,
    iconName?: string,
    type?: "submit" | "button" | "reset",
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    return (
        <div className={styles.container} style={style}>
            <button type={type} onClick={onClick}>
                {text}
                {iconName && <SvgIcon iconName={iconName} fill="white" />}
            </button>
        </div>
    )
}
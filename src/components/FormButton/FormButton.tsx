import { SvgIcon } from 'components/SvgIcon'
import React, { CSSProperties, MouseEvent } from 'react'
import styles from './styles.module.scss'

export function FormButton({
    id,
    text,
    style = {},
    iconName = "",
    type = "submit",
    background = "#0075FF",
    onClick = () => { }
}: {
    id?: string,
    text: string,
    style?: CSSProperties,
    iconName?: string,
    type?: "submit" | "button" | "reset",
    background?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    return (
        <div className={styles.container} style={style}>
            <button type={type} onClick={onClick} style={{ background: background }} id={id}>
                {text}
                {iconName && <SvgIcon iconName={iconName} fill="white" />}
            </button>
        </div>
    )
}
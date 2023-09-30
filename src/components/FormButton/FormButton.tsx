import { SvgIcon } from 'components/SvgIcon'
import React, { CSSProperties, MouseEvent } from 'react'
import styles from './styles.module.scss'

export function FormButton({
    text,
    style = {},
    iconName = "",
    onClick = (event: any) => { }
}: {
    text: string,
    style?: CSSProperties,
    iconName?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    return (
        <div className={styles.container} style={style}>
            <button type="submit" onClick={onClick}>
                {text}
                {iconName && <SvgIcon iconName={iconName} fill="white" />}
            </button>
        </div>
    )
}
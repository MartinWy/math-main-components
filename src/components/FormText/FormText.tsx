import React, { CSSProperties } from 'react'
import styles from './styles.module.scss'



export function FormText({
    title,
    value,
    style
}: {
    title: string,
    value: string,
    style?: CSSProperties
}) {

    return (
        <div className={styles.container} style={style}>
            <h5>{title}</h5>
            <h3>{value}</h3>
        </div>
    )
}
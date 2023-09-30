import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name
}: {
    text: any,
    name: string
}) {

    return (
        <>
            <div className={styles.container}>
                <input type="checkbox" name={name} id={name} />
                <label htmlFor={name}>{text}</label>
                <SvgIcon iconName="done" size="21px" />
            </div>
        </>
    )
}
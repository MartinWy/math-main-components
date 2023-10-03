import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name,
    defaultChecked = false
}: {
    text: any,
    name: string,
    defaultChecked?: boolean
}) {

    return (
        <>
            <div className={styles.container}>
                <input type="checkbox" name={name} id={name} defaultChecked={defaultChecked} />
                <label htmlFor={name}>{text}</label>
                <SvgIcon iconName="done" size="21px" />
            </div>
        </>
    )
}
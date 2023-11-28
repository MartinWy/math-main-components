import { SvgIcon } from 'components/SvgIcon'
import React, { ChangeEvent, ReactNode } from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name,
    defaultChecked = false,
    onClick = () => { },
}: {
    text: ReactNode,
    name: string,
    onClick?: (event: ChangeEvent<HTMLInputElement>) => void,
    defaultChecked?: boolean
}) {

    return (
        <div className={styles.container}>
            <input type="checkbox" onChange={onClick} name={name} id={name} defaultChecked={defaultChecked} />
            <label htmlFor={name}>{text}</label>
            <SvgIcon iconName="done" size="21px" />
        </div>
    )
}
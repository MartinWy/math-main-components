import { SvgIcon } from 'components/SvgIcon'
import React, { MouseEvent, ReactNode } from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name,
    defaultChecked = false,
    onInput = () => { },
}: {
    text: ReactNode,
    name: string,
    onInput?: (event: MouseEvent<HTMLInputElement>) => void,
    defaultChecked?: boolean
}) {

    return (
        <div className={styles.container}>
            <input type="checkbox" onInput={onInput} name={name} id={name} defaultChecked={defaultChecked} />
            <label htmlFor={name}>{text}</label>
            <SvgIcon iconName="done" size="21px" />
        </div>
    )
}
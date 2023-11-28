import { SvgIcon } from 'components/SvgIcon'
import React, { ChangeEvent, ReactNode } from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name,
    checked,
    defaultChecked = false,
    onInput = () => { },
}: {
    text: ReactNode,
    name: string,
    checked?: boolean,
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void,
    defaultChecked?: boolean
}) {

    return (
        <div className={styles.container} >
            <input type="checkbox" onInput={onInput} name={name} id={name} checked={checked} defaultChecked={defaultChecked} />
            <label htmlFor={name}>{text}</label>
            <SvgIcon iconName="done" size="21px" />
        </div>
    )
}
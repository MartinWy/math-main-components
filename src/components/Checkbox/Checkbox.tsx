import { SvgIcon } from 'components/SvgIcon'
import React, { ChangeEvent, ReactNode } from 'react'
import styles from './styles.module.scss'



export function Checkbox({
    text,
    name,
    checked,
    defaultChecked = false,
    onChange = () => { },
}: {
    text: ReactNode,
    name: string,
    checked?: boolean,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    defaultChecked?: boolean
}) {

    return (
        <div className={styles.container} >
            <input type="checkbox" onChange={onChange} name={name} id={name} checked={checked} defaultChecked={defaultChecked} />
            <label htmlFor={name}>{text}</label>
            <SvgIcon iconName="done" size="21px" />
        </div>
    )
}
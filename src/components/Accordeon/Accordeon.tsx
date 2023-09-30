import React, { useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import { AccordeonProps } from './Accordeon.types'
import styles from './styles.module.scss'

export function Accordeon({
    title,
    children
}: AccordeonProps) {

    const [isActive, setActive] = useState(false)

    return (
        <div className={[styles.container, isActive ? styles.active : styles.not_active].join(" ")}>
            <div className={styles.head} onClick={() => setActive(!isActive)}>
                <SvgIcon iconName="expand_more" />
                <h3>{title}</h3>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
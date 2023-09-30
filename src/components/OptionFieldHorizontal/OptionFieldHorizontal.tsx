import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function OptionFieldHorizontal({
    title,
    iconName,
    preselected = false
}: {
    title: string,
    iconName: string,
    preselected?: boolean
}) {
    return (
        <div className={[styles.container, preselected ? styles.preselected : styles.not_preselected].join(" ")}>
            <SvgIcon iconName={iconName} size="32px" />
            <h3>{title}</h3>
        </div>
    )
}
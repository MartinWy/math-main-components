import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'


export function TextWithIcon({
    iconName,
    label,
}: {
    iconName: string,
    label: string,
}) {

    return (
        <div className={styles.container}>
            <SvgIcon iconName={iconName} />
            <span>{label}</span>
        </div>
    )
}
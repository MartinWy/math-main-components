import { Button } from 'components/Button'
import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function EmptyCard({
    title = "Keine Daten",
    subtitle = "Es sind keine Daten vorhanden.",
    iconName = "manage_search",
    button,
    onClick
}: {
    title?: string,
    subtitle?: string,
    iconName?: string,
    button?: string,
    onClick?: () => void
}) {
    return (
        <div className={styles.card}>
            <SvgIcon size="60px" iconName={iconName} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {button && <Button text={button} onClick={onClick} />}
        </div>
    )
}
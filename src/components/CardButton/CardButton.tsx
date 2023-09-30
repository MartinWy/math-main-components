import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function CardButton({
    title,
    iconName,
    onClick,
}: {
    title: string,
    iconName: string,
    onClick?: (event: any) => {}
}) {

    function onClickCard(event: any) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.card} onClick={onClickCard}>
            <SvgIcon iconName={iconName} />
            <h2>{title}</h2>
        </div>
    )
}
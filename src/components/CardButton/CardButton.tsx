import { SvgIcon } from 'components/SvgIcon'
import React, { MouseEvent } from 'react'
import styles from './styles.module.scss'

export function CardButton({
    id,
    title,
    iconName,
    onClick,
}: {
    id?: string,
    title: string,
    iconName: string,
    onClick?: (event: MouseEvent<HTMLDivElement>) => {}
}) {

    function onClickCard(event: MouseEvent<HTMLDivElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.card} onClick={onClickCard}>
            <SvgIcon iconName={iconName} size="32px" />
            <h2>{title}</h2>
        </div>
    )
}
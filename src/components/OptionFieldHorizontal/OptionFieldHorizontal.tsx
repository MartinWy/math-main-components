import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function OptionFieldHorizontal({
    title,
    iconName,
    onClick,
    preselected = false
}: {
    title: string,
    iconName?: string,
    onClick?: (event: any) => void,
    preselected?: boolean
}) {

    function onClickDiv(event: any) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={[styles.container, preselected ? styles.preselected : styles.not_preselected].join(" ")} onClick={onClickDiv}>
            {iconName && <SvgIcon iconName={iconName} size="32px" />}
            <h3>{title}</h3>
        </div>
    )
}
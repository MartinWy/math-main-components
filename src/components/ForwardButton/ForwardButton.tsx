import { SvgIcon } from 'components/SvgIcon'
import React, { MouseEvent } from 'react'
import styles from './styles.module.scss'


export function ForwardButton({
    onClick
}: {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {

    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container}>
            <button onClick={onClickButton} className={styles.button}>
                <SvgIcon iconName="arrow_back" />
            </button>
        </div>
    )
}
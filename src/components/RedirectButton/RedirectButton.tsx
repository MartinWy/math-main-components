import React, { MouseEvent } from 'react'
import { SvgIcon } from '../SvgIcon'
import styles from './styles.module.scss'


export function RedirectButton({
    type = "forward",
    onClick
}: {
    type: "forward" | "back" | "middle",
    onClick?: any
}) {

    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (onClick) onClick(event)
    }

    const getIcon = () => {
        switch (type) {
            case "forward": return "arrow_forward"
            case "back": return "arrow_back"
            case "middle": return "arrow_back"
        }
    }

    return (
        <div className={[styles.container, styles[type]].join(" ")}>
            <button onClick={onClickButton} className={styles.button}>
                <SvgIcon iconName={getIcon()} />
                {["middle"].includes(type) &&
                    <span>Zurück</span>
                }
            </button>
        </div>
    )
}
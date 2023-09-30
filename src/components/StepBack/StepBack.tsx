import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'



export function StepBack({
    iconName = "arrow_back",
    text = "Weitere Möglichkeiten"
}: {
    iconName?: string,
    text?: string
}) {

    return (
        <>
            <div className={styles.container}>
                <SvgIcon iconName={iconName} />
                {text}
            </div>
        </>
    )
}
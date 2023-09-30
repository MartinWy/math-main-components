import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function OptionField({
    headline,
    description,
    iconName
}: {
    headline: string,
    description: string,
    iconName?: string,
}) {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.left_side}>
                    {iconName && <SvgIcon iconName={iconName} />}
                </div>
                <div className={styles.right_side}>
                    <h4>{headline}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}
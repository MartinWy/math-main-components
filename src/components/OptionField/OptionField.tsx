import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'

export function OptionField({
    id,
    headline,
    description,
    iconName
}: {
    id?: string,
    headline: string,
    description: string,
    iconName?: string,
}) {
    return (
        <>
            <div className={styles.box} id={id}>
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
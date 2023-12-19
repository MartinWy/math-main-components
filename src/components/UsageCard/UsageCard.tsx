import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import styles from './styles.module.scss'

export function UsageCard({
    title,
    subtitle,
    ratio = 0,
    loading
}: {
    title?: string,
    subtitle?: string,
    ratio?: number,
    loading?: boolean
}) {

    if (loading) return <div className={[styles.container, styles.loading].join(" ")}></div>

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className={styles.graph}>
                <PieChart
                    data={[
                        { title: 'One', value: 1 - ratio, color: 'var(--background-4)' }, //#DFDFDF
                        { title: 'Two', value: ratio + 0.05, color: 'var(--primary-1)' }, //#0085FF
                    ]}
                    lineWidth={15}
                    totalValue={1}
                />
            </div>
        </div>
    )
}
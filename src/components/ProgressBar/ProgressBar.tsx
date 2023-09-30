import React from 'react'
import styles from './styles.module.scss'


export function ProgressBar({
    length,
    progress
}: {
    length: number,
    progress: number
}) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.progress} style={{ width: `${progress / length * 100}%` }}>

                    </div>
                </div>
            </div>
        </>
    )
}
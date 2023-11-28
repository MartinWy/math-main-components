import React from 'react'
import styles from './styles.module.scss'


interface TabItem {
    title: string
    value: string
}

export function Tabs({
    tabs = [],
    onSelect = () => { },
    selected
}: {
    tabs: TabItem[],
    onSelect?: (value: string) => void,
    selected?: string
}) {

    return (
        <div className={styles.container}>
            {tabs.map((tab: TabItem) =>
                <div
                    className={[styles.tab, tab.value == selected ? styles.selected : styles.not_selected].join(" ")}
                    key={tab.value}
                    onClick={() => onSelect(tab.value)}>
                    {tab.title}
                </div>
            )}
        </div>
    )
}
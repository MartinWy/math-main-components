import React, { useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import styles from './styles.module.scss'


export class SearchChip {
    title: string
    value: string
    selected: boolean = false

    constructor(title: string, value: string) {
        this.title = title
        this.value = value
    }
}

export function SearchChips({
    items,
    onChange
}: {
    items: SearchChip[],
    onChange?: (chips: SearchChip[]) => void
}) {

    const [chips, setChips] = useState<SearchChip[]>(items)

    function onClick(item: SearchChip, index: number) {
        const newChips: SearchChip[] = [...chips]
        newChips[index] = { ...item, selected: !item.selected }
        setChips(newChips)
        if (onChange) onChange(newChips)
    }

    return (
        <div className={styles.container}>
            {chips.map((item, index) =>
                <div key={index} onClick={(e) => onClick(item, index)} className={[styles.chip, item.selected ? styles.selected : styles.not_selected].join(" ")}>
                    <SvgIcon iconName={item.selected ? "close" : "filter_list"} size="20px" />
                    {item.title}
                </div>
            )}
        </div>
    )
}
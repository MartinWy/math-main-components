import React, { useState } from 'react'
import styles from './styles.module.scss'

export class ChooseRoleItem {
    title: string
    value: string

    constructor(title: string, value: string) {
        this.title = title
        this.value = value
    }
}


export function ChooseRole({
    roles,
    defaultSelected,
    readOnly = false,
    onChange
}: {
    roles: ChooseRoleItem[],
    defaultSelected: string,
    readOnly?: boolean,
    onChange: (item: string) => void
}) {

    const [selected, setSelected] = useState<string>(defaultSelected)

    function onUpdate(newRole: string) {
        if (readOnly) return
        setSelected(newRole)
        onChange(newRole)
    }

    return (
        <div className={styles.container}>
            {roles.map((item, index) =>
                <div key={index} className={[styles.item, selected == item.value ? styles.selected : styles.not_selected].join(" ")} onClick={() => onUpdate(item.value)}>
                    {item.title}
                </div>
            )}
        </div>
    )
}
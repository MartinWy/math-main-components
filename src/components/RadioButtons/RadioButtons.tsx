import React, { MouseEvent, useState } from 'react';
import styles from './styles.module.scss';


export class RadioOption {
    text: string
    name: string

    constructor(text: string, name: string) {
        this.text = text;
        this.name = name;
    }
}

export function RadioButtons({
    options,
    group,
    selected,
    onClick,
    width = "100%"
}: {
    options: RadioOption[],
    group: string,
    selected?: string,
    onClick?: (event: MouseEvent<HTMLInputElement>) => void,
    width?: string
}) {

    const [selectedOption, setSelected] = useState(selected)

    function onUpdateSelected(event: MouseEvent<HTMLInputElement>) {
        setSelected(event.currentTarget.value)
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container} style={{ width: width }}>
            {options.map((option: RadioOption) =>
                <div className={styles.option} key={option.name}>
                    {selected && selected == option.name ?
                        <input type="radio" id={option.name} name={group} value={option.name} onClick={onUpdateSelected} defaultChecked />
                        :
                        <input type="radio" id={option.name} name={group} value={option.name} onClick={onUpdateSelected} />
                    }
                    <label htmlFor={option.name}>{option.text}</label>
                </div>
            )}
        </div>
    )
}
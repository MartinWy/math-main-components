import { SvgIcon } from 'components/SvgIcon';
import React, { ChangeEvent, useState } from 'react';
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
    onClick?: (event: ChangeEvent<HTMLInputElement>) => void,
    width?: string
}) {

    const [selectedOption, setSelected] = useState(selected)

    function onUpdateSelected(event: ChangeEvent<HTMLInputElement>) {
        setSelected(event.target.value)
        if (onClick) onClick(event)
    }

    return (
        <div className={styles.container} style={{ width: width }}>
            {options.map((option: RadioOption) =>
                <div className={styles.option} key={option.name}>
                    {selected && selected == option.name ?
                        <input type="radio" id={option.name} name={group} value={option.name} onInput={onUpdateSelected} defaultChecked />
                        :
                        <input type="radio" id={option.name} name={group} value={option.name} onInput={onUpdateSelected} />
                    }
                    <label htmlFor={option.name}>{option.text}</label>
                    <SvgIcon iconName="done" size="20px" />
                </div>
            )}
        </div>
    )
}
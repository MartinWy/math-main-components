import React, { ChangeEvent, HTMLInputTypeAttribute, useCallback, useState } from 'react';
import styles from './styles.module.scss';

export function InputNumber({
    title,
    name,
    placeholder = "",
    defaultValue = "",
    autoFocus = false,
    type = "number",
    width = "100%",
    available = true,
    onInput = (event: ChangeEvent<HTMLInputElement>) => { }
}: {
    title: string,
    name: string,
    placeholder?: string,
    defaultValue?: string,
    autoFocus?: boolean,
    type?: HTMLInputTypeAttribute,
    width?: string,
    available?: boolean,
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void
}) {

    const [value, setValue] = useState(defaultValue)

    const inputElement = useCallback((element: HTMLInputElement) => {
        if (element && autoFocus) element.focus();
    }, [autoFocus])

    return (
        <>
            <div className={styles.container} style={{ width }}>
                <input
                    className={`${styles.input} ${title != undefined ? styles.with_title : styles.without_title} ${value.length > 0 || defaultValue.length > 0 ? styles.valid : styles.not_valid} ${available ? styles.available : styles.not_available}`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    ref={inputElement}
                    defaultValue={defaultValue}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value)
                        onInput(event)
                    }}
                />
                <label htmlFor="text" className={styles.label}>
                    <span className={styles.label_text}>
                        {title}
                    </span>
                </label>
            </div>
        </>
    )
}
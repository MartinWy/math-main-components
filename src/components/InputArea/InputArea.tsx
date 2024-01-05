import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from './styles.module.scss';

export function InputArea({
    id,
    title,
    name,
    placeholder = "",
    defaultValue = "",
    autoFocus = false,
    width = "100%",
    height = "100px",
    available = true,
    onInput
}: {
    id?: string,
    title: string,
    name: string,
    placeholder?: string,
    defaultValue?: string,
    autoFocus?: boolean,
    width?: string,
    height?: string,
    available?: boolean,
    onInput?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) {

    const [value, setValue] = useState(defaultValue)

    const inputElement = useCallback((element: HTMLTextAreaElement) => {
        if (element && autoFocus) element.focus();
    }, [autoFocus])

    return (
        <>
            <div className={styles.container} style={{ width }}>
                <textarea
                    className={`${styles.input} ${title != undefined ? styles.with_title : styles.without_title} ${value.length > 0 || defaultValue.length > 0 ? styles.valid : styles.not_valid} ${available ? styles.available : styles.not_available}`}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    ref={inputElement}
                    defaultValue={defaultValue}
                    style={{ minHeight: height, maxHeight: height }}
                    onInput={(event: ChangeEvent<HTMLTextAreaElement>) => {
                        setValue(event.target.value)
                        if (onInput) onInput(event)
                    }}
                ></textarea>
                <label htmlFor="text" className={styles.label}>
                    <span className={styles.label_text}>
                        {title}
                    </span>
                </label>
            </div>
        </>
    )
}
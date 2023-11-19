import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'

export function InputMail({
    placeholder = "E-Mail-Adresse",
    title = "E-Mail-Adresse",
    name = "email",
    width = "100%",
    available = true
}: {
    placeholder?: string,
    title?: string,
    name?: string,
    width?: string,
    available?: boolean
}) {

    const [value, setValue] = useState("")

    return (
        <>
            <div className={styles.container} style={{ width: width }}>
                <input
                    className={`${styles.input} ${title != undefined ? styles.with_title : styles.without_title} ${value.length > 0 ? styles.valid : styles.not_valid} ${available ? styles.available : styles.not_available}`}
                    name={name} placeholder={placeholder}
                    type="email"
                    onInput={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
                <label htmlFor="text" className={styles.label}>
                    <span className={styles.label_text}>
                        {title}
                    </span>
                </label>
            </div>
        </>
    )
}
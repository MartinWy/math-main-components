import React, { MouseEvent, useState } from 'react'
import styles from './styles.module.scss'

export function InputNames({
    width = "100%",
    placeholder = { firstName: "", lastName: "" },
    title = { firstName: "Vorname", lastName: "Nachname" },
    onInput = (name: string, event: any) => { },
    onInputFirstName = (event: any) => { },
    onInputLastName = (event: any) => { },
}: {
    width?: string,
    placeholder?: { firstName: string, lastName: string },
    title?: { firstName: string, lastName: string },
    onInput?: (name: string, event: MouseEvent<HTMLInputElement>) => void,
    onInputFirstName?: (event: MouseEvent<HTMLInputElement>) => void,
    onInputLastName?: (event: MouseEvent<HTMLInputElement>) => void
}) {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    function onInput1(event: any) {
        setValue1(event.target.value)
        onInputFirstName(event)
        onInput("firstName", event)
    }

    function onInput2(event: any) {
        setValue2(event.target.value)
        onInputLastName(event)
        onInput("lastName", event)
    }

    return (
        <div className={styles.container} style={{ width: width }}>
            <div className={styles.form}>
                <input
                    className={`${styles.input} ${title.firstName != undefined ? styles.with_title : styles.without_title} ${value1.length > 0 ? styles.valid : styles.not_valid}`}
                    name="firstName"
                    type="name"
                    style={{ width: width != "100%" ? "100px" : width }}
                    placeholder={placeholder.firstName}
                    onInput={onInput1} />
                <label htmlFor="text" className={styles.label}>
                    <span className={styles.label_text}>
                        {title.firstName}
                    </span>
                </label>
            </div>
            <div className={styles.form}>
                <input
                    className={`${styles.input} ${title.lastName != undefined ? styles.with_title : styles.without_title} ${value2.length > 0 ? styles.valid : styles.not_valid}`}
                    name="lastName"
                    type="name"
                    style={{ width: width != "100%" ? "100px" : width }}
                    placeholder={placeholder.lastName}
                    onInput={onInput2} />
                <label htmlFor="text" className={styles.label}>
                    <span className={styles.label_text}>
                        {title.lastName}
                    </span>
                </label>
            </div>
        </div>
    )
}
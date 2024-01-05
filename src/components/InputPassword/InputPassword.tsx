import { SvgIcon } from 'components/SvgIcon'
import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'

export function InputPassword({
    id,
    placeholder = "",
    title = "Passwort",
    name,
    isVisible = true,
    width = "100%",
    minLength = 8,
    autoComplete,
    forgotLink = false
}: {
    id?: string,
    placeholder?: string,
    autoComplete?: string,
    title?: string,
    name: string,
    minLength?: number,
    isVisible?: boolean,
    width?: string,
    forgotLink?: any
}) {

    const [value, setValue] = useState("")
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <div className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`} style={{ width: width }}>
                <div className={styles.form}>
                    <input
                        className={`${styles.input} ${title != undefined ? styles.with_title : styles.without_title} ${value.length > 0 ? styles.valid : styles.not_valid}`}
                        name={name}
                        minLength={minLength}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        type={hidePassword ? "password" : "text"}
                        onInput={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
                    <label htmlFor="text" className={styles.label}>
                        <span className={styles.label_text}>
                            {title}
                        </span>
                    </label>
                    <button title={hidePassword ? "Passwort anzeigen" : "Passwort verstecken"} className={styles.hideButton} onClick={() => setHidePassword(!hidePassword)} type="button">
                        <SvgIcon iconName={hidePassword ? "visibility" : "visibility_off"} />
                    </button>
                </div>
                {forgotLink &&
                    <div className={styles.forgot_container}>
                        {forgotLink}
                    </div>
                }
            </div>
        </>
    )
}
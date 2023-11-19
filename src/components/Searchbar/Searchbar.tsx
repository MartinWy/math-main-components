import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import styles from './styles.module.scss'

export type SearchResult = {
    title: string
    data: unknown
}

export function Searchbar<Type extends SearchResult>({
    placeholder,
    title = "Suchen",
    showNoResults = false,
    errorTitle = "Keine Ergebnisse gefunden",
    errorMessage = "",
    errorButton = "",
    helpTitle = "",
    helpMessage = "",
    errorAction = (event: MouseEvent<HTMLButtonElement>) => { },
    onInput = (event: ChangeEvent<HTMLInputElement>) => { },
    onClickResult = (event: MouseEvent<HTMLLIElement>, result: Type) => { },
    withButton = false,
    buttonText = "Suchen",
    suggestions = [],
    autoFocus = false,
    results = []
}: {
    placeholder: string,
    title?: string,
    showNoResults?: boolean,
    errorTitle?: string,
    errorMessage?: string,
    errorButton?: string,
    helpTitle?: string,
    helpMessage?: string,
    errorAction?: (event: MouseEvent<HTMLButtonElement>) => void,
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void,
    onClickResult?: (event: MouseEvent<HTMLLIElement>, result: Type) => void,
    withButton?: boolean,
    buttonText?: string,
    suggestions?: string[],
    autoFocus?: boolean,
    results?: Type[]
}) {

    const [value, setValue] = useState("")
    const [inputFocused, setFocused] = useState(false)
    const [searchResults, setSearchResults] = useState(results)

    function onInputChanged(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setValue(event.target.value)
        updateSearch(event)
        onInput(event)
    }

    function updateSearch(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        const value = event.target.value

        if (value == '' || value == undefined || value == null) {
            setSearchResults(results)
        }
        else {
            setSearchResults(results.filter((result) => {
                return result.title.includes(event.target.value)
            }))
        }
    }

    const inputElement = useCallback((element: HTMLInputElement) => {
        if (element && autoFocus) element.focus();
    }, [autoFocus])

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.form} ${inputFocused ? styles.focus : styles.not_focused}`}>
                    <input
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={`${styles.input} ${title != undefined ? styles.with_title : styles.without_title} ${value.length > 0 ? styles.valid : styles.not_valid}`}
                        placeholder={placeholder}
                        type="search"
                        ref={inputElement}
                        onInput={onInputChanged}
                    />
                    <label htmlFor="text" className={styles.label}>
                        <span className={styles.label_text}>
                            {title}
                        </span>
                    </label>
                </div>

                {withButton && <button type="button">{buttonText}</button>}

                {suggestions.length > 0 && <div className={styles.suggestions_container}>
                    <ul>
                        {suggestions.map((suggestion, index) =>
                            <li key={index}>
                                {suggestion}
                            </li>
                        )}
                    </ul>
                </div>}

                {searchResults.length > 0 && <div className={styles.results_container}>
                    <ul>
                        {searchResults.map((result, index) =>
                            <li key={index} onClick={(event) => onClickResult(event, result)}>
                                <span>{result.title}</span>
                                <button type="button">{buttonText}</button>
                            </li>
                        )}
                    </ul>
                </div>}

                {searchResults.length == 0 && showNoResults && value.length > 0 && <div className={styles.results_container}>
                    <div className={styles.error}>
                        <SvgIcon iconName="error" />
                        <h3>{errorTitle}</h3>
                        <p>{errorMessage}</p>
                        {errorButton.length > 0 && <button type="button" onClick={errorAction}>{errorButton}</button>}
                    </div>
                </div>}

                {searchResults.length == 0 && showNoResults && value.length == 0 && <div className={styles.results_container}>
                    <div className={styles.error}>
                        <SvgIcon iconName="lightbulb" />
                        <h3>{helpTitle}</h3>
                        <p>{helpMessage}</p>
                    </div>
                </div>}
            </div>
        </>
    )
}
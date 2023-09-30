import React, { KeyboardEvent, createRef, useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';

export function InputPin({
    name,
    length,
    onFinished = () => { }
}: {
    name: string,
    length: number,
    onFinished?: () => void
}) {

    const [state, setState] = useState<any>({})

    const fieldRefs = useRef<any>([])
    fieldRefs.current = [...Array(length)].map((_, i) => fieldRefs.current[i] ?? createRef());

    function onChange(event: any, position: number) {

        const regex = /^[0-9\b]+$/;
        const value: string = event.target.value ? event.target.value : ""

        if (value != '' && regex.test(value)) {

            const digitCountBefore = state[position] == undefined ? 0 : String(state[position]).length
            const addedDigitsCount = value.length - digitCountBefore

            if (addedDigitsCount == 1) {
                fieldRefs.current[(position + 1) % length].current.focus()
                setDigit(position, value.charAt(-1))
            }
            else {
                const digits = value.split("")

                if (digitCountBefore == 1) digits.shift()

                let newState = { ...state }

                digits.forEach((digit, position) => {
                    newState[position % length] = digit
                    fieldRefs.current[position % length].current.value = digit
                })

                if (digits.length >= 6) {
                    fieldRefs.current[length - 1].current.focus()
                }

                setState(newState)
            }
        }
    }

    function onKeyUp(event: KeyboardEvent<HTMLInputElement>, position: number) {
        event.preventDefault()

        // Keys: Backspace, Arrow left
        if ([8, 37].includes(event.keyCode)) {
            fieldRefs.current[(((position) - 1) + length) % length].current.focus()
        }

        // Keys: Tab (automatically), Arrow Right
        if ([39].includes(event.keyCode)) {
            fieldRefs.current[(position + 1) % length].current.focus()
        }
    }

    function setDigit(position: number, digit: string) {
        fieldRefs.current[position % length].current.value = digit
        setState({ ...state, [position % length]: digit })
    }

    function resetValues() {
        setState({})
        fieldRefs.current.forEach((ref: any) => {
            ref.current.value = ""
        })
    }

    const inputElement = useCallback((element: any) => {
        if (element) element.focus()
    }, [])

    return (
        <>
            <div className={styles.container}>
                <input name={name} type="hidden" defaultValue={Object.values(state).join("")} />
                <div className={styles.input_wrapper}>
                    {[...Array(length)].map((e, i) => {
                        if (i == 0) {
                            return <input key={i} pattern="[0-9]" value={state[i] ? state[i] : ""} ref={fieldRefs.current[i]} className={styles.input} type="text" onKeyUp={(event) => onKeyUp(event, i)} onInput={(event) => onChange(event, i)} />
                        }
                        return <input key={i} pattern="[0-9]" value={state[i] ? state[i] : ""} ref={fieldRefs.current[i]} className={styles.input} type="text" onKeyUp={(event) => onKeyUp(event, i)} onInput={(event) => onChange(event, i)} />
                    })}
                </div>
                <button onClick={resetValues}>Zurücksetzen</button>
            </div>
        </>
    )
}
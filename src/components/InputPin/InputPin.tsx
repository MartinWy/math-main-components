import React, { ChangeEvent, KeyboardEvent, createRef, useRef, useState } from 'react';
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

    function onChange(event: ChangeEvent<HTMLInputElement>, position: number) {

        const regex = /[0-9]+/;
        const value: string = event.target.value ? event.target.value.replace(" ", "") : ""

        if (value == '' || !regex.test(value)) return

        const digitCountBefore = state[position] == undefined ? 0 : String(state[position]).length
        const addedDigitsCount = value.length - digitCountBefore

        // One digit was added
        if (addedDigitsCount == 1) {
            fieldRefs.current[(position + 1) % length].current.focus()
            setDigit(position, value.slice(-1))
            return
        }


        const digits = value.split("")

        if (digitCountBefore == 1) digits.shift()

        let newState = { ...state }

        digits.forEach((digit, relativePosition) => {
            newState[relativePosition % length + position] = digit
            fieldRefs.current[relativePosition % length + position].current.value = digit
        })

        if (digits.length >= 6) {
            fieldRefs.current[length - 1].current.focus()
        }

        setState(newState)
    }

    function onKeyUp(event: KeyboardEvent, position: number) {
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

    return (
        <div className={styles.container}>
            <input name={name} type="hidden" defaultValue={Object.values(state).join("")} />
            <div className={styles.input_wrapper}>
                {[...Array(length)].map((value, i) => {
                    if (i == 0) {
                        return <input key={i} pattern="[0-9]" value={state[i] ? state[i] : ""} ref={fieldRefs.current[i]} className={styles.input} type="text" onKeyUp={(event: KeyboardEvent) => onKeyUp(event, i)} onInput={(event: ChangeEvent<HTMLInputElement>) => onChange(event, i)} />
                    }
                    return <input key={i} pattern="[0-9]" value={state[i] ? state[i] : ""} ref={fieldRefs.current[i]} className={styles.input} type="text" onKeyUp={(event: KeyboardEvent) => onKeyUp(event, i)} onInput={(event: ChangeEvent<HTMLInputElement>) => onChange(event, i)} />
                })}
            </div>
            <button type="button" onClick={resetValues}>Zurücksetzen</button>
        </div>
    )
}
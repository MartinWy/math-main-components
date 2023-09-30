import { SvgIcon } from 'components/SvgIcon'
import React from 'react'
import styles from './styles.module.scss'


export function CopyCode({
    code,
    style,
    onCopy = () => { }
}: {
    code: string,
    style?: any,
    onCopy?: () => void
}) {

    function onClick() {
        navigator.clipboard.writeText(code)
        if (onCopy) onCopy()
    }

    return (
        <div className={styles.container} onClick={onClick} style={style}>
            <SvgIcon iconName="content_copy" />
            <span>{code}</span>
            <input type="hidden" name="code" value={code} />
        </div>
    )
}
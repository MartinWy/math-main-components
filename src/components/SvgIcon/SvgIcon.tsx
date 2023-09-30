import React from 'react';
import { SvgIconProps } from "./SvgIcon.types";


export function SvgIcon({
    iconName,
    size = "24px",
    className = "",
    onClick
}: SvgIconProps) {
    return (
        <>
            <span onClick={onClick} className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>
                {iconName}
            </span >
        </>
    )
}
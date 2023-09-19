import { MouseEventHandler } from "react"

export interface SvgIconProps {
    iconName?: string
    size?: string
    fill?: string
    className?: string
    onClick?: MouseEventHandler<HTMLSpanElement>
}
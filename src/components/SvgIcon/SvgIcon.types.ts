import { MouseEvent } from "react"

export interface SvgIconProps {
    iconName?: string
    size?: string
    fill?: string
    className?: string
    onClick?: (event: MouseEvent<HTMLSpanElement>) => void
}
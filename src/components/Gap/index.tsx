import React from "react";
import { GapProps } from "./Gap.types";


export default function Gap({ size }: GapProps) {
    return (
        <div style={{ height: size }}></div>
    )
}
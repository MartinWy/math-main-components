import React, { CSSProperties, MouseEvent } from 'react';
export declare function FormButton({ text, style, iconName, type, background, onClick }: {
    text: string;
    style?: CSSProperties;
    iconName?: string;
    type?: "submit" | "button" | "reset";
    background?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

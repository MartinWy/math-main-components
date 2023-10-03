import React, { CSSProperties, MouseEvent } from 'react';
export declare function FormButton({ text, style, iconName, type, onClick }: {
    text: string;
    style?: CSSProperties;
    iconName?: string;
    type?: "submit" | "button" | "reset";
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

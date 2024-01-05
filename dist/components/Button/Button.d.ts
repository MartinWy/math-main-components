import React, { MouseEvent } from 'react';
type ButtonType = "blue" | "red" | "grey" | "lightBlue";
export declare function Button({ id, text, iconName, iconFill, type, onClick }: {
    id?: string;
    text?: string;
    iconName?: string;
    iconFill?: string;
    type?: ButtonType;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;
export {};

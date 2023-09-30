import React, { CSSProperties, MouseEvent } from 'react';
export declare function FormButton({ text, style, iconName, onClick }: {
    text: string;
    style?: CSSProperties;
    iconName?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

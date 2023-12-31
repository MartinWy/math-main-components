import React, { MouseEvent } from 'react';
export declare function Button({ text, iconName, iconFill, type, onClick }: {
    text?: string;
    iconName?: string;
    iconFill?: string;
    type?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

import React, { MouseEvent } from 'react';
export declare function AuthButton({ id, text, type, theme, iconName, isVisible, onClick }: {
    id?: string;
    text: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    theme?: 'primary' | 'secondary' | undefined;
    iconName?: string;
    isVisible?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

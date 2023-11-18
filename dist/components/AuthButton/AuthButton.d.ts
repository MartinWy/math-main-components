import React, { MouseEvent } from 'react';
export declare function AuthButton({ text, type, theme, iconName, isVisible, onClick }: {
    text: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    theme?: 'primary' | 'secondary' | undefined;
    iconName?: string;
    isVisible?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

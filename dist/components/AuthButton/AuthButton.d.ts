import React, { MouseEventHandler } from 'react';
export declare function AuthButton({ text, type, theme, iconName, isVisible, onClick }: {
    text: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    theme?: 'primary' | 'secondary' | undefined;
    iconName?: string;
    isVisible?: boolean;
    onClick?: MouseEventHandler | undefined;
}): React.JSX.Element;

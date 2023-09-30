import React, { MouseEvent } from 'react';
export declare function PrimaryButton({ text, iconName, type, onClick }: {
    text: string;
    iconName: string;
    type?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): React.JSX.Element;

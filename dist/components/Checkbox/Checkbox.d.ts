import React, { ChangeEvent, ReactNode } from 'react';
export declare function Checkbox({ text, name, defaultChecked, onClick, }: {
    text: ReactNode;
    name: string;
    onClick?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

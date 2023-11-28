import React, { ChangeEvent, ReactNode } from 'react';
export declare function Checkbox({ text, name, checked, defaultChecked, onInput, }: {
    text: ReactNode;
    name: string;
    checked?: boolean;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

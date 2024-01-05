import React, { ChangeEvent, ReactNode } from 'react';
export declare function Checkbox({ id, text, name, checked, defaultChecked, onInput, }: {
    id?: string;
    text: ReactNode;
    name: string;
    checked?: boolean;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

import React, { ChangeEvent, ReactNode } from 'react';
export declare function Checkbox({ text, name, checked, defaultChecked, onChange, }: {
    text: ReactNode;
    name: string;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

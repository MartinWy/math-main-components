import React, { ChangeEvent, ReactNode } from 'react';
export declare function Checkbox({ text, name, defaultChecked, onInput, }: {
    text: ReactNode;
    name: string;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

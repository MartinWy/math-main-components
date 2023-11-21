import React, { MouseEvent, ReactNode } from 'react';
export declare function Checkbox({ text, name, defaultChecked, onInput, }: {
    text: ReactNode;
    name: string;
    onInput?: (event: MouseEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

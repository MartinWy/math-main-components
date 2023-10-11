import React, { MouseEvent } from 'react';
export declare function Checkbox({ text, name, defaultChecked, onInput, }: {
    text: any;
    name: string;
    onInput?: (event: MouseEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
}): React.JSX.Element;

import React, { MouseEvent } from 'react';
export declare function InputText({ title, name, placeholder, defaultValue, autoFocus, type, width, available, onInput }: {
    title: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    type?: string;
    width?: string;
    available?: boolean;
    onInput?: (event: MouseEvent<HTMLInputElement>) => void;
}): React.JSX.Element;

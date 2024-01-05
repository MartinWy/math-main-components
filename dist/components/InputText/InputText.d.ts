import React, { ChangeEvent } from 'react';
export declare function InputText({ id, title, name, placeholder, defaultValue, autoFocus, type, width, marginBottom, available, onInput }: {
    id?: string;
    title: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    type?: string;
    width?: string;
    marginBottom?: string;
    available?: boolean;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}): React.JSX.Element;

import React, { HTMLInputTypeAttribute, MouseEvent } from 'react';
export declare function InputNumber({ title, name, placeholder, defaultValue, autoFocus, type, width, available, onInput }: {
    title: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    type?: HTMLInputTypeAttribute;
    width?: string;
    available?: boolean;
    onInput?: (event: MouseEvent<HTMLInputElement>) => void;
}): React.JSX.Element;

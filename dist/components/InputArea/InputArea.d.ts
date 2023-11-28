import React, { ChangeEvent } from 'react';
export declare function InputArea({ title, name, placeholder, defaultValue, autoFocus, width, height, available, onInput }: {
    title: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    width?: string;
    height?: string;
    available?: boolean;
    onInput?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}): React.JSX.Element;

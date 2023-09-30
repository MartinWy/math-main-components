import React, { MouseEvent } from 'react';
export declare function InputNames({ width, placeholder, title, onInput, onInputFirstName, onInputLastName, }: {
    width?: string;
    placeholder?: {
        firstName: string;
        lastName: string;
    };
    title?: {
        firstName: string;
        lastName: string;
    };
    onInput?: (name: string, event: MouseEvent<HTMLInputElement>) => void;
    onInputFirstName?: (event: MouseEvent<HTMLInputElement>) => void;
    onInputLastName?: (event: MouseEvent<HTMLInputElement>) => void;
}): React.JSX.Element;

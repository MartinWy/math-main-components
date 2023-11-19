import React, { ChangeEvent } from 'react';
export declare function InputNames({ width, placeholder, title, defaultValue, onInput, onInputFirstName, onInputLastName, }: {
    width?: string;
    placeholder?: {
        firstName?: string;
        lastName?: string;
    };
    title?: {
        firstName?: string;
        lastName?: string;
    };
    defaultValue?: {
        firstName?: string;
        lastName?: string;
    };
    onInput?: (name: string, event: ChangeEvent<HTMLInputElement>) => void;
    onInputFirstName?: (event: ChangeEvent<HTMLInputElement>) => void;
    onInputLastName?: (event: ChangeEvent<HTMLInputElement>) => void;
}): React.JSX.Element;

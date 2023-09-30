import React, { MouseEvent } from 'react';
export declare function Searchbar({ placeholder, title, showNoResults, errorTitle, errorMessage, errorButton, helpTitle, helpMessage, errorAction, onInput, onClickResult, withButton, buttonText, suggestions, autoFocus, results }: {
    placeholder: string;
    title?: string;
    showNoResults?: boolean;
    errorTitle?: string;
    errorMessage?: string;
    errorButton?: string;
    helpTitle?: string;
    helpMessage?: string;
    errorAction?: (event: MouseEvent<HTMLButtonElement>) => void;
    onInput?: (event: MouseEvent<HTMLInputElement>) => void;
    onClickResult?: (event: MouseEvent<HTMLLIElement>, result: any) => void;
    withButton?: boolean;
    buttonText?: string;
    suggestions?: any[];
    autoFocus?: boolean;
    results?: any[];
}): React.JSX.Element;

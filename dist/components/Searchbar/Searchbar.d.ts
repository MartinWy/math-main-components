import React, { ChangeEvent, MouseEvent } from 'react';
export type SearchResult = {
    title: string;
    data: unknown;
};
export declare function Searchbar<Type extends SearchResult>({ placeholder, title, showNoResults, errorTitle, errorMessage, errorButton, helpTitle, helpMessage, errorAction, onInput, onClickResult, withButton, buttonText, suggestions, autoFocus, results }: {
    placeholder: string;
    title?: string;
    showNoResults?: boolean;
    errorTitle?: string;
    errorMessage?: string;
    errorButton?: string;
    helpTitle?: string;
    helpMessage?: string;
    errorAction?: (event: MouseEvent<HTMLButtonElement>) => void;
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickResult?: (event: MouseEvent<HTMLLIElement>, result: Type) => void;
    withButton?: boolean;
    buttonText?: string;
    suggestions?: string[];
    autoFocus?: boolean;
    results?: Type[];
}): React.JSX.Element;

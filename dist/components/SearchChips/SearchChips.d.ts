import React from 'react';
export declare class SearchChip {
    title: string;
    value: string;
    selected: boolean;
    constructor(title: string, value: string);
}
export declare function SearchChips({ items, onChange, chipsVisible }: {
    items: SearchChip[];
    onChange?: (chips: SearchChip[]) => void;
    chipsVisible: number;
}): React.JSX.Element;

import React from 'react';
export declare class SearchChip {
    title: string;
    value: string;
    selected: boolean;
    constructor(title: string, value: string);
}
export declare function SearchChips({ items, onChange }: {
    items: SearchChip[];
    onChange?: (chips: SearchChip[]) => void;
}): React.JSX.Element;

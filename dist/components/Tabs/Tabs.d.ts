import React from 'react';
export interface TabItem {
    title: string;
    value: string;
}
export declare function Tabs({ tabs, onSelect, selected }: {
    tabs: TabItem[];
    onSelect?: (value: string) => void;
    selected?: string;
}): React.JSX.Element;

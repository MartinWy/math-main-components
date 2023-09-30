import React from 'react';
export declare enum TableActionType {
    red = 0,
    default = 1
}
export declare class TableItem {
    title: string;
    subtitle: string;
    moreText: string;
    iconName: string;
    data: any;
    constructor(title: string, subtitle: string, moreText: string, iconName: string, data?: any);
}
export declare class TableItemAction {
    title: string;
    iconName: string;
    onClick: (event: any, item: TableItem, index: number) => void;
    type: TableActionType;
    constructor(title: string, iconName: string, type: TableActionType, onClick?: (event: any, item: TableItem, index: number) => void);
}
export declare function Table({ items, title, actions, moreActions }: {
    items: TableItem[];
    title: string;
    actions?: TableItemAction[];
    moreActions?: any[];
}): React.JSX.Element;

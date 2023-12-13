import React, { MouseEvent, ReactNode } from 'react';
export declare enum TableActionType {
    red = 0,
    default = 1
}
export declare class TableItem<DataType> {
    title: string;
    subtitle: string;
    moreText: string;
    iconName: string;
    data: DataType;
    constructor(title: string, subtitle: string, moreText: string, iconName: string, data: DataType);
}
export declare class TableItemAction<DataType> {
    title: string;
    iconName: string;
    onClick: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void;
    type: TableActionType;
    constructor(title: string, iconName: string, type: TableActionType, onClick?: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void);
}
export declare function Table<DataType>({ items, title, actions, moreActions, marginTop }: {
    items: TableItem<DataType>[];
    title: string;
    actions?: TableItemAction<DataType>[];
    moreActions?: ((data: DataType, index: number) => ReactNode)[];
    marginTop?: number;
}): React.JSX.Element;

import React, { MouseEvent, ReactNode } from 'react';
export type TableActionType = "red" | "default";
export type TableItem<DataType> = {
    title: string;
    subtitle: string;
    moreText: string;
    iconName: string;
    data: DataType;
};
export type TableItemAction<DataType> = {
    title: string;
    iconName: string;
    onClick: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void;
    type: TableActionType;
};
export declare function Table<DataType>({ items, title, actions, moreActions, selected, marginTop }: {
    items: TableItem<DataType>[];
    title: string;
    selected?: number;
    actions?: TableItemAction<DataType>[];
    moreActions?: ((data: DataType, index: number) => ReactNode)[];
    marginTop?: number;
}): React.JSX.Element;

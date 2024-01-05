import React, { MouseEvent } from 'react';
export declare function CardButton({ id, title, iconName, onClick, }: {
    id?: string;
    title: string;
    iconName: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => {};
}): React.JSX.Element;

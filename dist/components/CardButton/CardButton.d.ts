import React, { MouseEvent } from 'react';
export declare function CardButton({ title, iconName, onClick, }: {
    title: string;
    iconName: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => {};
}): React.JSX.Element;

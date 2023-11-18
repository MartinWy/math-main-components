import React, { MouseEvent } from 'react';
export declare function OptionFieldHorizontal({ title, iconName, onClick, preselected }: {
    title: string;
    iconName?: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    preselected?: boolean;
}): React.JSX.Element;

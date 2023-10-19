import React from 'react';
export declare class RadioOption {
    text: string;
    name: string;
    constructor(text: string, name: string);
}
export declare function RadioButtons({ options, group, selected, onClick, width }: {
    options: RadioOption[];
    group: string;
    selected?: string;
    onClick?: (event: any) => void;
    width?: string;
}): React.JSX.Element;

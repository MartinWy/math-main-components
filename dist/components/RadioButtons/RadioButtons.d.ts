import React from 'react';
export declare class RadioOption {
    text: string;
    name: string;
    constructor(text: string, name: string);
}
export declare function RadioButtons({ options, group, selected, width }: {
    options: RadioOption[];
    group: string;
    selected?: string;
    width?: string;
}): React.JSX.Element;

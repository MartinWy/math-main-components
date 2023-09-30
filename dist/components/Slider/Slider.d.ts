import React from 'react';
export declare class SliderCard {
    title: string;
    description: string;
    constructor(title: string, description: string);
}
export declare function Slider({ cards }: {
    cards: SliderCard[];
}): React.JSX.Element;

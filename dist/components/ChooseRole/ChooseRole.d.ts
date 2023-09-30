import React from 'react';
export declare class ChooseRoleItem {
    title: string;
    value: string;
    constructor(title: string, value: string);
}
export declare function ChooseRole({ roles, defaultSelected, readOnly, onChange }: {
    roles: ChooseRoleItem[];
    defaultSelected: string;
    readOnly?: boolean;
    onChange: (item: string) => void;
}): React.JSX.Element;

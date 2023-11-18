import React from "react";
export interface DialogData {
    isActive: boolean;
    data?: any;
}
export declare function Dialog({ data, text, onClose, onSubmit, children }: {
    data?: DialogData;
    text?: any;
    onClose?: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, data?: any | undefined) => void;
    onSubmit?: (event: React.MouseEvent<HTMLButtonElement>, data?: any | undefined) => void;
    children: any;
}): React.JSX.Element;

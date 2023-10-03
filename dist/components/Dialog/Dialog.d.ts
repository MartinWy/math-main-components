import React from "react";
export interface DialogData {
    isActive: boolean;
    data?: any;
}
export declare function Dialog({ data, text, onClose, onSubmit, children }: {
    data?: DialogData;
    text?: any;
    onClose?: (event: React.MouseEventHandler<HTMLDivElement>, data: any) => void;
    onSubmit?: (event: React.MouseEventHandler<HTMLButtonElement>, data: any) => void;
    children: any;
}): React.JSX.Element;

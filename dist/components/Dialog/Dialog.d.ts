import React from "react";
import { DialogProps } from "./Dialog.types";
export interface DialogData {
    isActive: boolean;
    data: any;
}
export declare function Dialog({ data, onClose, children }: DialogProps): React.JSX.Element;

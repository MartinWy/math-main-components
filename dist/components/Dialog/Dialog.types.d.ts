/// <reference types="react" />
import { DialogData } from "./Dialog";
export interface DialogProps {
    data?: DialogData;
    onClose?: (event: React.MouseEventHandler<HTMLDivElement>, data: any) => void;
    children: any;
}

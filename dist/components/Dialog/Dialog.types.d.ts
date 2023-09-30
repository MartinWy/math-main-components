/// <reference types="react" />
export interface DialogProps {
    active?: boolean;
    onClose?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
    children: any;
}

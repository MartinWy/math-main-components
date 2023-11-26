export interface Log {
    id: string;
    title: string;
    message: string;
    httpCode?: number;
    stack?: string;
    application: "math-main-app" | "math-main-manager";
    createdAt: Date;
}

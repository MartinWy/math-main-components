export type Log = {
    id: string;
    title: string;
    message: string;
    httpCode?: number;
    stack?: string;
    application: LogApplication;
    createdAt: Date;
};
export type LogApplication = "math-main-app" | "math-main-manager";

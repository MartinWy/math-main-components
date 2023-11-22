

export interface Manager {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    permissions: string[],
    createdAt: Date,
    updateAt: Date
}

export enum ManagerPermission {
    content = "content",
    subsription = "subscription",
    manager = "manager",
    license = "license",
    file = "file",
}

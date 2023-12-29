

export type Manager = {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    permissions: string[],
    createdAt: Date,
    updateAt: Date
}

export type ManagerPermission = "content" | "subscription" | "manager" | "license" | "file" | "feedback"
export interface HttpResponde {
    status: boolean,
    data: {
        id: number,
        name: string,
        email: string,
        token: string,
        role: string
    },
    error: string | boolean
}

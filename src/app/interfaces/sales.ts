export interface Sales {
    data: Array<SalesElement>,
}

export interface SalesElement{
    id: number,
    user_id: string,
    role_id: string,
    sales: SalesData
}

export interface SalesData{
    id: number,
    name: string,
    email: string,
    password: string
}

export interface userData{
    data: {
        id: number,
        name: string,
        email: string,
        phone: number,
        password: string
    }
}


export interface userFormData{
    name: string,
    email: string,
    phone: number, 
    password: string
}

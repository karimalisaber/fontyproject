export interface GetCategoriesResponse {
    data:  Array<UserCat> ,
    status: string ,
    errors: string ,
}

export interface UserCat{
    id: number, 
    name: string,
    created_at?: Date, 
    updated_at?: Date
}

export interface PostCategoriesResponse {
    data:  UserCat ,
    status: string ,
    errors: string ,
}
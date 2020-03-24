export interface Items {
    data: Array<ItemData>
}

export interface ItemData {
    id: 2,
    name: string,
    price: string,
    body: string,
    points: string,
    descound: string,
    img: string,
    catogery_id: number,
}


export interface updateItem {
    data : {
        id: 2,
        name: string,
        price: string,
        body: string,
        points: string,
        descound: string,
        img: string,
        catogery_id: number,
    }
}


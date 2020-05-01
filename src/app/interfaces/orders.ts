export interface Orders {
    data: OrderData[];
}

export interface OrderData{
    id : Number,
    user_id: Number,
    payment_type: Number,
    status: Number | null,

    order_items: Array<OrderItems>,
    order_user: OrderUser
}

export interface OrderItems{
    id: Number,
    user_id: Number,
    item_id: Number,
    count: Number,
    status: Number | null,        
}

export interface OrderUser{
    id: 1,
    name: String,
    email: String,
    phone: Number,
}
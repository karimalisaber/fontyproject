export interface Orders {
    data: Array<OrderData>
}

export interface OrderData{
    id : Number,
    user_id: Number,
    payment_type: Number,
    status: Number | null,

    order_items: Array<OrderItems>,
    order_user: OrderUsers
}

export interface OrderItems{
    id: Number,
    user_id: Number,
    item_id: Number,
    count: Number,
    status: Number | null,        
}

export interface OrderUsers{
    id: 1,
    name: String,
    email: String,
    phone: Number,
}
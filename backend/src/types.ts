export interface PurchaseRequest {  
    itemId: number;  
    quantity: number;  
}  

export interface ItemResponse {  
    id: number;  
    name: string;  
    price: number;  
    remaining: number;  
}  
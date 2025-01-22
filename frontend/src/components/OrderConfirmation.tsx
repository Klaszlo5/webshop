import React from 'react';  

const OrderConfirmation: React.FC<{ orderDetails: any }> = ({ orderDetails }) => {  
    return (  
        <div>  
            <h2>Order Confirmation</h2>  
            <p>{orderDetails.message}</p>  
        </div>  
    );  
};  

export default OrderConfirmation;  

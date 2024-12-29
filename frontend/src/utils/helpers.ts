export const formatCurrency = (amount: number): string => {
    return '$' + amount.toFixed(2);
};

export const calculateTotal = (cartItems: { price: number; quantity: number }[]): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
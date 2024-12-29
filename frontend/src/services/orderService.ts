const placeOrder = async (cart: any[]) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    });
    return response.json();
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};

export { placeOrder };
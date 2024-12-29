const fetchItems = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
    return response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export { fetchItems };
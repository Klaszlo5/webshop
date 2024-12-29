import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';

const ItemListPage: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
      setItems(response.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items for Sale</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListPage;
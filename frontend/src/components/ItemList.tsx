import React from 'react';

const ItemList: React.FC<{ items: any[] }> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Remaining: {item.remaining}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
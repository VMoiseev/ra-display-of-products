import React from 'react';
import ShopItem from './ShopItem';

function ListView({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <ShopItem item={item} key={item.name + index}/>
      ))}
    </>
  )
}


export default ListView;
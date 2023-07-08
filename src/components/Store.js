import React, { useState } from 'react';
import { products } from '../data/data';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

function Store() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(products);
  const [icon, setIcon ] = useState('view_list');

  const onSwitch = () => {
    icon === 'view_list' ? setIcon('view_module') : setIcon('view_list');
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch}/>
      {icon === 'view_list' ? (
        <ListView items={data} />
      ) : (
        <CardsView cards={data} />
      )}
    </>
  )
}

export default Store;
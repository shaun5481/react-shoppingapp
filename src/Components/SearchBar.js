import React, { useState } from 'react';
import { auth } from '../Config/firebase';

export const SearchBar = () => {
  const [saerchField, setSearchField] = useState('');


  return (
    <div>
      <div className="control">
        <input className="input" placeholder="search your item" />
      </div>
    </div>
  );
}


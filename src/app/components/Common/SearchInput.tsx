"use client";

import React, { ChangeEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search', onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-input-container">
      <input
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="input-field"
        type="text"
      />
      <div className="search-icon">
        <FiSearch />
      </div>
    </div>
  );
};

export default SearchInput;

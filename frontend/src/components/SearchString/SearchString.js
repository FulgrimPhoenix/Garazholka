import React, { useEffect, useState } from "react";
import "./SearchString.css";

const SearchString = ({
  searchParameter,
  itemList,
  setEventList,
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = itemList.filter((item) =>
    item[searchParameter].toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    if (searchValue === "") {
      setEventList(itemList);
    }
    setEventList(filteredItems);
  }, [filteredItems]);

  return (
    <>
      <input
        id="search-string"
        className="search-string"
        type="text"
        placeholder="Поиск..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {children}
    </>
  );
};

export default SearchString;

import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import "./SearchString.css";

interface SearchStringParam {
  searchParameter: string;
  itemList: Record<string, string>[];
  setEventList: (newValue: Record<string, string>[]) => void;
  children: ReactElement;
}

export function SearchString({
  searchParameter,
  itemList,
  setEventList,
  children,
}: SearchStringParam): ReactElement {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = itemList.filter((item) =>
    item[searchParameter].toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    if (searchValue === "") {
      setEventList(itemList);
    }
    setEventList(filteredItems);
  }, [searchValue]);

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
}

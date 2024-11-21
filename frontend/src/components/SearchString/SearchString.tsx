import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import "./SearchString.css";
import { TEventList, IEventItem } from "../../types";

interface ISearchString {
  searchParameter: "title";
  itemList: TEventList;
  setEventList: (newValue: TEventList) => void;
  children: ReactElement;
}

export function SearchString({
  searchParameter,
  itemList,
  setEventList,
  children,
}: ISearchString): ReactElement {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = itemList.filter((item: IEventItem) =>
    item[searchParameter].toLowerCase().includes(searchValue.toLowerCase())
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

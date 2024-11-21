import { NavLink } from "react-router-dom";
import React, { ReactElement } from "react";
import "./GroupList.css";
import { IGroupMainData } from "../../types";

interface IGroupList {
  groupListData: {
    groupLinkImg: (arg?: string) => string;
    groupList: IGroupMainData[];
  };
  isGroupListOpen: boolean;
  handleListChoice: (e: React.SyntheticEvent<EventTarget>) => void;
  currentListChoice: string;
}

export function GroupList({
  groupListData,
  isGroupListOpen,
  handleListChoice,
  currentListChoice,
}: IGroupList): ReactElement {
  return (
    <div key={"987"} className="group-list__form">
      <form
        className={`group-list__container ${
          isGroupListOpen ? "group-list__container_open" : ""
        }`}
      >
        {groupListData.groupList.map((el) => {
          return (
            <div key={el.id}>
              {(el.id as string) === currentListChoice ? (
                <input
                  onClick={handleListChoice}
                  id={el.id}
                  className="group-list__item-input"
                  type="radio"
                  name={"selected_group"}
                  value={el.id}
                  disabled
                />
              ) : (
                <input
                  onClick={handleListChoice}
                  id={el.id.toString()}
                  className="group-list__item-input"
                  type="radio"
                  name={"selected_group"}
                  value={el.id}
                />
              )}
              <label
                htmlFor={el.id.toString()}
                className="group-list__item-label"
              >
                <img
                  className="group-list__item-avatar"
                  src={el.avatar}
                  alt="аватар"
                />
                <div className="group-list__item-group-info">
                  <h2 className="group-list__item-title">{el.groupTitle}</h2>
                  <p className="group-list__item-followersNumber-counter">
                    {el.followersNumber}
                    {` ${el.followersNumber === 1 ? "участник" : "участников"}`}
                  </p>
                </div>
                <NavLink to={"#"} className="group-list__item-link">
                  <img
                    className=""
                    src={
                      el.id === currentListChoice
                        ? groupListData.groupLinkImg("selected")
                        : groupListData.groupLinkImg()
                    }
                    alt="иконка_ссылки"
                  />
                </NavLink>
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

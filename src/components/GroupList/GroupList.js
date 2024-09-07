import { NavLink } from "react-router-dom";
import "./GroupList.css";

export function GroupList({
  groupListData,
  isGroupListOpen,
  handleListChoice,
  currentListChoice,
}) {
  return (
    <div className="group-list__form">
      <form
        className={`group-list__container ${
          isGroupListOpen ? "group-list__container_open" : ""
        }`}
      >
        {groupListData.groupList.map((el) => {
          return (
            <>
              {el.id === currentListChoice ? (
                <input
                  onClick={handleListChoice}
                  key={el.id}
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
                  key={el.id}
                  id={el.id}
                  className="group-list__item-input"
                  type="radio"
                  name={"selected_group"}
                  value={el.id}
                />
              )}
              <label htmlFor={el.id} className="group-list__item-label">
                <img
                  className="group-list__item-avatar"
                  src={el.avatar}
                  alt="аватар"
                />
                <div className="group-list__item-group-info">
                  <h2 className="group-list__item-title">{el.title}</h2>
                  <p className="group-list__item-followers-counter">
                    {el.followers}
                    {` ${el.followers === 1 ? "участник" : "участников"}`}
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
            </>
          );
        })}
      </form>
    </div>
  );
}

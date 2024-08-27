import { NavLink } from "react-router-dom";
import "./CustomLinkLogButton.css";

export function CustomLinkLogButton({ onClick, styleMode, to, title }) {
  const setActive = ({ isActive }, baseStyle) =>
    isActive
      ? `${baseStyle} link link_active`
      : `${baseStyle}`;
  return (
    <NavLink
      onClick={onClick}
      className={({ isActive }) => setActive({ isActive }, styleMode)}
      to={to}
    >
      <p className={`${styleMode}-text`}>{title}</p>
    </NavLink>
  );
}
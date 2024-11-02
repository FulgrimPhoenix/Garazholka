import { useLocation } from "react-router-dom"

export const useUrlPathName = (): string => {
  const currentLocation = useLocation();
  return currentLocation.pathname
}
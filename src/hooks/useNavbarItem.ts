import { navbarConfig } from "../config/navbarConfig";
import { useAppSelector } from "../store/hooks";

export const useNavbarItem = () => {
  const userRole = useAppSelector((state) => state.role.currentRole);

  return navbarConfig[userRole];
};

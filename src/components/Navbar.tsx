import { useNavbarItem } from "../hooks/useNavbarItem";

export const Navbar = () => {
  const item = useNavbarItem();

  return (
    <div>
      <h1>Navbar</h1>
      {item()}
    </div>
  );
};

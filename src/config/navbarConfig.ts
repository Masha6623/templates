import { DeveloperComponent } from "../components/block/DeveloperComponent.tsx";
import { UserComponent } from "../components/block/UserComponent.tsx";
import { UserRole } from "../types/roleTypes.ts.ts";
import { AdminComponent } from "../components/block/AdminComponent.tsx";

export const navbarConfig: Record<UserRole, () => JSX.Element> = {
  [UserRole.USER]: UserComponent,
  [UserRole.ADMIN]: AdminComponent,
  [UserRole.DEVELOPER]: DeveloperComponent,
};

import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { RootState } from "../../store/store.ts";
import { setRole } from "../../store/roleSlice.ts";
import { UserRole } from "../../types/roleTypes.ts.ts";

export const RoleSelector = () => {
  const dispatch = useAppDispatch();
  const currentRole = useAppSelector(
    (state: RootState) => state.role.currentRole
  );

  const handleChange = (e: SelectChangeEvent<UserRole>) => {
    dispatch(setRole(e.target.value as UserRole));
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Select a Role
      </Typography>
      <Select value={currentRole} onChange={handleChange}>
        {Object.values(UserRole).map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

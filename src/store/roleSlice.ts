import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feature, UserRole } from "../types/roleTypes.ts";
import { SliceNames } from "../config/sliceNames.ts";
import { RootState } from "./store.ts";
export const getFeaturesPermissions = (): FeatureConfig => ({
  [Feature.HOME_PAGE]: [UserRole.USER],
  [Feature.TEMPLATE_LIST]: [UserRole.ADMIN],
  [Feature.CHARTS]: [UserRole.DEVELOPER, UserRole.ADMIN],
});

interface UserStore {
  currentRole: UserRole;
  config: FeatureConfig;
}

const initialState: UserStore = {
  currentRole: UserRole.USER,
  config: getFeaturesPermissions(),
};

type FeatureConfig = Record<Feature, UserRole[]>;

const selectSelf = (state: RootState) => state.role;

export const hasAccessToFeature = createSelector(selectSelf, (userState) => {
  return (feature: Feature) => {
    return userState.config[feature].includes(userState.currentRole);
  };
});

const roleSlice = createSlice({
  name: SliceNames.Role.description as string,
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<UserRole>) {
      state.currentRole = action.payload;
    },
  },
});

// userSlice

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;

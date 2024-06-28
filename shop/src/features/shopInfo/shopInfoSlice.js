import { createSlice } from "@reduxjs/toolkit";
import { PLANS_DURATION_Yearly } from "../../shared/constants/orderPlaned";
import {
  ADDONS_CUSTOMIZE_PROFILE,
  ADDONS_LARGER_STORAGE,
  ADDONS_ONLINE_SERVICE,
} from "../../shared/constants/addOn";
const initialAddOns = {
  [ADDONS_ONLINE_SERVICE]: false,
  [ADDONS_LARGER_STORAGE]: false,
  [ADDONS_CUSTOMIZE_PROFILE]: false,
};
const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  planDuration: PLANS_DURATION_Yearly,
  selectedPlane: "",
  addOns: initialAddOns,
};
export const shopInfoSlice = createSlice({
  name: "shopInfoSlice",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
    },
    setPlan: (state, action) => {
      state.selectedPlane = action.payload;
    },
    setDuration: (state, action) => {
      state.planDuration = action.payload;
    },
    setAddOns: (state, action) => {
      state.addOns = { ...state.addOns, ...action.payload };
    },
  },
});

export const { setPersonalInfo, setPlan,setAddOns,setDuration } = shopInfoSlice.actions;
export default shopInfoSlice.reducer;

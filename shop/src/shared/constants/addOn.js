import { PLANS_DURATION_MONTHLY, PLANS_DURATION_Yearly } from "./orderPlaned";

export const ADDONS_ONLINE_SERVICE = "onlineService";
export const ADDONS_LARGER_STORAGE = "largerStorage";
export const ADDONS_CUSTOMIZE_PROFILE = "customizeProfile";

export const addOnOptions = [
  {
    id: ADDONS_ONLINE_SERVICE,
    title: "Online service",
    description: "Access to multiplayer games",
    price: { [PLANS_DURATION_Yearly]: 10, [PLANS_DURATION_MONTHLY]: 1 },
  },
  {
    id: ADDONS_LARGER_STORAGE,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: { [PLANS_DURATION_Yearly]: 20, [PLANS_DURATION_MONTHLY]: 2 },
  },
  {
    id: ADDONS_CUSTOMIZE_PROFILE,
    title: "Customizable profile",
    description: "Customize them on you profile",
    price: { [PLANS_DURATION_Yearly]: 20, [PLANS_DURATION_MONTHLY]: 2 },
  },
];

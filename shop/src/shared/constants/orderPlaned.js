export const PLANS_DURATION_MONTHLY='mo'
export const PLANS_DURATION_Yearly='yr'

export const orderPlaned = [
  {
    id: "arcade",
    title: "Arcade",
    price: { [PLANS_DURATION_Yearly]: 90, [PLANS_DURATION_MONTHLY]: 9 },
    description: "2 months free",
    srcImage: "/static/images/icon-arcade.svg",
  },
  {
    id: "advanced",
    title: "Advanced",
    price: { [PLANS_DURATION_Yearly]: 120, [PLANS_DURATION_MONTHLY]: 12 },
    description: "2 months free",
    srcImage: "/static/images/icon-advanced.svg",
  },
  {
    id: "pro",
    title: "Pro",
    price: { [PLANS_DURATION_Yearly]: 150, [PLANS_DURATION_MONTHLY]: 15 },
    description: "2 months free",
    srcImage: "/static/images/icon-pro.svg",
  },
];


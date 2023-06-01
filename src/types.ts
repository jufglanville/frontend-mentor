export type PriceType = 'annual' | 'monthly';

export type PlanType = {
  type: PriceType;
  amount: number;
};

export type PricePlanMap = {
  annual: PlanType;
  monthly: PlanType;
};

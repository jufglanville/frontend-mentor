export type PriceType = 'annual' | 'monthly';

export type PlanType = {
  id: string;
  type: PriceType;
  amount: number;
};

export type PricePlans = PlanType[];

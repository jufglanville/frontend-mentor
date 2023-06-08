export type PriceType = 'year' | 'month';

export type PlanType = {
  id: string;
  name: string;
  type: PriceType;
  amount: number;
};

export type PricePlans = PlanType[];

export type PricePlanTemplate = {
  actionLabel: string;
  icon: string;
  altText: string;
  currency: string;
  plans: PricePlans;
}
import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  productionOrders?: Array<ProductionOrder>;
  updatedAt: Date;
};

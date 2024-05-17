import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type ProductionQueue = {
  createdAt: Date;
  id: string;
  productionOrder?: ProductionOrder | null;
  scheduledDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};

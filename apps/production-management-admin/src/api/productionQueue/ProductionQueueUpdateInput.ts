import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type ProductionQueueUpdateInput = {
  productionOrder?: ProductionOrderWhereUniqueInput | null;
  scheduledDate?: Date | null;
  status?: "Option1" | null;
};

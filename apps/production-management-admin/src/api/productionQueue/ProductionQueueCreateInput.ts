import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type ProductionQueueCreateInput = {
  productionOrder?: ProductionOrderWhereUniqueInput | null;
  scheduledDate?: Date | null;
  status?: "Option1" | null;
};

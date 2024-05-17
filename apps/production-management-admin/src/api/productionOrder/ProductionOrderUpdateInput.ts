import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductionQueueUpdateManyWithoutProductionOrdersInput } from "./ProductionQueueUpdateManyWithoutProductionOrdersInput";
import { InputJsonValue } from "../../types";

export type ProductionOrderUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  productionQueues?: ProductionQueueUpdateManyWithoutProductionOrdersInput;
  quantity?: number | null;
  requiredMaterials?: InputJsonValue;
  totalCost?: number | null;
};

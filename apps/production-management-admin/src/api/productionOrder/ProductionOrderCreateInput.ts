import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductionQueueCreateNestedManyWithoutProductionOrdersInput } from "./ProductionQueueCreateNestedManyWithoutProductionOrdersInput";
import { InputJsonValue } from "../../types";

export type ProductionOrderCreateInput = {
  product?: ProductWhereUniqueInput | null;
  productionQueues?: ProductionQueueCreateNestedManyWithoutProductionOrdersInput;
  quantity?: number | null;
  requiredMaterials?: InputJsonValue;
  totalCost?: number | null;
};

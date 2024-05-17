import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductionQueueListRelationFilter } from "../productionQueue/ProductionQueueListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductionOrderWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  productionQueues?: ProductionQueueListRelationFilter;
  quantity?: IntNullableFilter;
  requiredMaterials?: JsonFilter;
  totalCost?: FloatNullableFilter;
};

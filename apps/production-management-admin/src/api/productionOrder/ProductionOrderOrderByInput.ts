import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  requiredMaterials?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
};

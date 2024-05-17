import { SortOrder } from "../../util/SortOrder";

export type ProductionQueueOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productionOrderId?: SortOrder;
  scheduledDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};

import { ProductionQueueWhereInput } from "./ProductionQueueWhereInput";
import { ProductionQueueOrderByInput } from "./ProductionQueueOrderByInput";

export type ProductionQueueFindManyArgs = {
  where?: ProductionQueueWhereInput;
  orderBy?: Array<ProductionQueueOrderByInput>;
  skip?: number;
  take?: number;
};

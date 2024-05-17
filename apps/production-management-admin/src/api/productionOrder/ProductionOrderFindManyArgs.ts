import { ProductionOrderWhereInput } from "./ProductionOrderWhereInput";
import { ProductionOrderOrderByInput } from "./ProductionOrderOrderByInput";

export type ProductionOrderFindManyArgs = {
  where?: ProductionOrderWhereInput;
  orderBy?: Array<ProductionOrderOrderByInput>;
  skip?: number;
  take?: number;
};

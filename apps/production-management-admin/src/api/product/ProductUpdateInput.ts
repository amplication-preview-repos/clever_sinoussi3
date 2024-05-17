import { ProductionOrderUpdateManyWithoutProductsInput } from "./ProductionOrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  productionOrders?: ProductionOrderUpdateManyWithoutProductsInput;
};

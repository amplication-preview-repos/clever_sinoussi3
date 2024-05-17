import { ProductionOrderCreateNestedManyWithoutProductsInput } from "./ProductionOrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutProductsInput;
};

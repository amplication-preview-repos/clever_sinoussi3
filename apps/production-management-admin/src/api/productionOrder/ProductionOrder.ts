import { Product } from "../product/Product";
import { ProductionQueue } from "../productionQueue/ProductionQueue";
import { JsonValue } from "type-fest";

export type ProductionOrder = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  productionQueues?: Array<ProductionQueue>;
  quantity: number | null;
  requiredMaterials: JsonValue;
  totalCost: number | null;
  updatedAt: Date;
};

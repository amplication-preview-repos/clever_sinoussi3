import { ProductionOrder as TProductionOrder } from "../api/productionOrder/ProductionOrder";

export const PRODUCTIONORDER_TITLE_FIELD = "id";

export const ProductionOrderTitle = (record: TProductionOrder): string => {
  return record.id?.toString() || String(record.id);
};

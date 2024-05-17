import { ProductionQueue as TProductionQueue } from "../api/productionQueue/ProductionQueue";

export const PRODUCTIONQUEUE_TITLE_FIELD = "id";

export const ProductionQueueTitle = (record: TProductionQueue): string => {
  return record.id?.toString() || String(record.id);
};

import { StringFilter } from "../../util/StringFilter";
import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProductionQueueWhereInput = {
  id?: StringFilter;
  productionOrder?: ProductionOrderWhereUniqueInput;
  scheduledDate?: DateTimeNullableFilter;
  status?: "Option1";
};

import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MaterialWhereInput = {
  cost?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

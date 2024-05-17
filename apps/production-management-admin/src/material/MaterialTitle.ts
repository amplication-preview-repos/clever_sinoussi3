import { Material as TMaterial } from "../api/material/Material";

export const MATERIAL_TITLE_FIELD = "name";

export const MaterialTitle = (record: TMaterial): string => {
  return record.name?.toString() || String(record.id);
};

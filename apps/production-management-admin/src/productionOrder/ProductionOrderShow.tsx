import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCTIONORDER_TITLE_FIELD } from "./ProductionOrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductionOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="RequiredMaterials" source="requiredMaterials" />
        <TextField label="TotalCost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductionQueue"
          target="productionOrderId"
          label="Production Queues"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ProductionOrder"
              source="productionorder.id"
              reference="ProductionOrder"
            >
              <TextField source={PRODUCTIONORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ScheduledDate" source="scheduledDate" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

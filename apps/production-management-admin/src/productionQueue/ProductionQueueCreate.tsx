import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const ProductionQueueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="productionOrder.id"
          reference="ProductionOrder"
          label="ProductionOrder"
        >
          <SelectInput optionText={ProductionOrderTitle} />
        </ReferenceInput>
        <DateTimeInput label="ScheduledDate" source="scheduledDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

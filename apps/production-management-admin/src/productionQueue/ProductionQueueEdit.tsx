import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const ProductionQueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

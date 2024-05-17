import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaterialList } from "./material/MaterialList";
import { MaterialCreate } from "./material/MaterialCreate";
import { MaterialEdit } from "./material/MaterialEdit";
import { MaterialShow } from "./material/MaterialShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductionOrderList } from "./productionOrder/ProductionOrderList";
import { ProductionOrderCreate } from "./productionOrder/ProductionOrderCreate";
import { ProductionOrderEdit } from "./productionOrder/ProductionOrderEdit";
import { ProductionOrderShow } from "./productionOrder/ProductionOrderShow";
import { ProductionQueueList } from "./productionQueue/ProductionQueueList";
import { ProductionQueueCreate } from "./productionQueue/ProductionQueueCreate";
import { ProductionQueueEdit } from "./productionQueue/ProductionQueueEdit";
import { ProductionQueueShow } from "./productionQueue/ProductionQueueShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Production Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Material"
          list={MaterialList}
          edit={MaterialEdit}
          create={MaterialCreate}
          show={MaterialShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductionOrder"
          list={ProductionOrderList}
          edit={ProductionOrderEdit}
          create={ProductionOrderCreate}
          show={ProductionOrderShow}
        />
        <Resource
          name="ProductionQueue"
          list={ProductionQueueList}
          edit={ProductionQueueEdit}
          create={ProductionQueueCreate}
          show={ProductionQueueShow}
        />
      </Admin>
    </div>
  );
};

export default App;

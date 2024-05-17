import * as graphql from "@nestjs/graphql";
import { ProductionOrderResolverBase } from "./base/productionOrder.resolver.base";
import { ProductionOrder } from "./base/ProductionOrder";
import { ProductionOrderService } from "./productionOrder.service";

@graphql.Resolver(() => ProductionOrder)
export class ProductionOrderResolver extends ProductionOrderResolverBase {
  constructor(protected readonly service: ProductionOrderService) {
    super(service);
  }
}

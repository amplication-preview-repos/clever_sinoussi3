import * as graphql from "@nestjs/graphql";
import { ProductionQueueResolverBase } from "./base/productionQueue.resolver.base";
import { ProductionQueue } from "./base/ProductionQueue";
import { ProductionQueueService } from "./productionQueue.service";

@graphql.Resolver(() => ProductionQueue)
export class ProductionQueueResolver extends ProductionQueueResolverBase {
  constructor(protected readonly service: ProductionQueueService) {
    super(service);
  }
}

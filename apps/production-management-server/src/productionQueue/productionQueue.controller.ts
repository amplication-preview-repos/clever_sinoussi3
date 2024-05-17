import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionQueueService } from "./productionQueue.service";
import { ProductionQueueControllerBase } from "./base/productionQueue.controller.base";

@swagger.ApiTags("productionQueues")
@common.Controller("productionQueues")
export class ProductionQueueController extends ProductionQueueControllerBase {
  constructor(protected readonly service: ProductionQueueService) {
    super(service);
  }
}

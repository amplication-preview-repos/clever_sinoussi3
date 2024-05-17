import { Module } from "@nestjs/common";
import { ProductionQueueModuleBase } from "./base/productionQueue.module.base";
import { ProductionQueueService } from "./productionQueue.service";
import { ProductionQueueController } from "./productionQueue.controller";
import { ProductionQueueResolver } from "./productionQueue.resolver";

@Module({
  imports: [ProductionQueueModuleBase],
  controllers: [ProductionQueueController],
  providers: [ProductionQueueService, ProductionQueueResolver],
  exports: [ProductionQueueService],
})
export class ProductionQueueModule {}
